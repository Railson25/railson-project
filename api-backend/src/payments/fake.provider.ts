export type FakeChargeResult =
  | { status: "succeeded"; providerRef: string }
  | { status: "failed"; failureReason: string };

export class FakePaymentsProvider {
  async charge(amountCents: number, key?: string): Promise<FakeChargeResult> {
    if (String(amountCents).endsWith("13")) {
      return { status: "failed", failureReason: "Card declined (fake)" };
    }
    return { status: "succeeded", providerRef: `fake_key${key ?? Date.now()}` };
  }

  async getStatus(
    providerRef: string
  ): Promise<"succeeded" | "failed" | "unknow"> {
    if (providerRef.startsWith("fake_")) return "succeeded";

    return "unknow";
  }
}
