import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Queue, Worker, JobsOptions } from "bullmq";
import { PaymentsService } from "./payments.service";
import {
  PAYMENT_QUEUE,
  RECONCILE_QUEUE,
  backoffMs,
} from "./payments.constants";

@Injectable()
export class PaymentsQueue implements OnModuleInit {
  private queue?: Queue;
  private reconcileQueue?: Queue;
  private worker?: Worker;
  private reconcileWorker?: Worker;

  constructor(
    private readonly cfg: ConfigService,
    private readonly payments: PaymentsService
  ) {}

  onModuleInit() {
    const url = this.cfg.get<string>("REDIS_URL");

    if (!url) {
      console.log("REDIS_URL is not defined");
      return;
    }

    const conn = { connection: { url } };

    this.queue = new Queue(PAYMENT_QUEUE, conn);
    this.worker = new Worker(
      PAYMENT_QUEUE,
      async (job) => {
        if (job.name === "charge") {
          const { paymentId } = job.data as { paymentId: string };
          await this.payments.chargePayment(paymentId);
        }
      },
      conn
    );

    this.reconcileQueue = new Queue(RECONCILE_QUEUE, conn);
    this.reconcileWorker = new Worker(
      RECONCILE_QUEUE,
      async (job) => {
        if (job.name === "reconcile") {
          const { paymentId } = job.data as { paymentId: string };
          await this.payments.reconcile(paymentId);
        }
      },
      conn
    );

    this.reconcileQueue.add(
      "reconcile-scan",
      {},
      { repeat: { every: 60_000 }, removeOnComplete: 10, removeOnFail: 10 }
    );
  }

  async enqueueCharge(paymentId: string) {
    if (!this.queue) return this.payments.chargePayment(paymentId);

    const attempts = 5;
    const opts: JobsOptions = {
      attempts,
      backoff: {
        type: "exponential",
        delay: backoffMs(1),
      },
      removeOnComplete: 100,
      removeOnFail: 500,
    };

    return this.queue.add("charge", { paymentId }, opts);
  }

  async enqueueReconcile(paymentId: string) {
    if (!this.reconcileQueue) return this.payments.reconcile(paymentId);
    return this.reconcileQueue.add(
      "reconcile",
      { paymentId },
      { removeOnComplete: 100, removeOnFail: 100 }
    );
  }
}
