import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  scenarios: {
    make10k: {
      executor: "shared-iterations",
      vus: Number(__ENV.CONCURRENCY || 200),
      iterations: Number(__ENV.TOTAL_CUSTOMERS || 10000),
      maxDuration: "30m",
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000"],
    http_req_failed: ["rate<0.05"],
  },
};

const API_BASE = __ENV.API_BASE || "http://localhost:3000";
const CUSTOMER_ENDPOINT = __ENV.CUSTOMER_ENDPOINT || "/v1/customers";
const SUB_ENDPOINT = __ENV.SUB_ENDPOINT || "/v1/subscriptions";
const PAY_ENDPOINT = (id) => `/v1/invoices/${id}/pay`;
const WEBHOOK_ENDPOINT = "/v1/webhooks/fake";
const PLAN_CODES = (__ENV.PLAN_CODES || "basic,business,enterprise").split(",");

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function guidLike() {
  return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function () {
  const email = `load+${__VU}-${__ITER}-${Date.now()}@ex.com`;
  const cust = http.post(
    `${API_BASE}${CUSTOMER_ENDPOINT}`,
    JSON.stringify({ email }),
    {
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": `cust-${__VU}-${__ITER}-${Date.now()}`,
      },
      timeout: "30s",
    }
  );
  check(cust, { "customer 2xx": (r) => r.status >= 200 && r.status < 300 });

  let customerId = null;
  try {
    customerId = JSON.parse(cust.body).id;
  } catch {}
  if (!customerId) return;

  const planCode = rand(PLAN_CODES).trim();
  const sub = http.post(
    `${API_BASE}${SUB_ENDPOINT}`,
    JSON.stringify({ customerId, planCode }),
    {
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": `sub-${customerId}-${Date.now()}`,
      },
      timeout: "30s",
    }
  );
  check(sub, { "subscription 2xx": (r) => r.status >= 200 && r.status < 300 });

  let firstInvoiceId = null;
  try {
    firstInvoiceId = JSON.parse(sub.body).firstInvoice.id;
  } catch {}
  if (!firstInvoiceId) return;

  const idemKey = `inv-${firstInvoiceId}-try1`;
  const pay = http.post(`${API_BASE}${PAY_ENDPOINT(firstInvoiceId)}`, null, {
    headers: { "Idempotency-Key": idemKey },
    timeout: "30s",
  });
  check(pay, { "pay 2xx": (r) => r.status >= 200 && r.status < 300 });

  let paymentId = null;
  try {
    paymentId = JSON.parse(pay.body).paymentId;
  } catch {}
  if (!paymentId) return;

  const success = Math.random() < 0.9;
  const evt = `evt_${guidLike()}`;
  const providerRef = `fake_${guidLike()}`;
  const body = {
    providerEventId: evt,
    type: success ? "payment.succeeded" : "payment.failed",
    data: { paymentId, providerRef },
  };

  const wh = http.post(`${API_BASE}${WEBHOOK_ENDPOINT}`, JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
    timeout: "30s",
  });
  check(wh, { "webhook 2xx": (r) => r.status >= 200 && r.status < 300 });

  sleep(0.02);
}
