export const PAYMENT_QUEUE = "payments";
export const RECONCILE_QUEUE = "payments_reconcile";

export const MAX_ATTEMPTS = 5;
export const BASE_BACKOFF_MS = 1000;
export const MAX_BACKOFF_MS = 10 * 60 * 1000;

export function backoffMs(attempt: number) {
  const delay = BASE_BACKOFF_MS * Math.pow(2, attempt - 1);

  return Math.min(delay, MAX_BACKOFF_MS);
}
