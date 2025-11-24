# Arquitetura

```mermaid
flowchart LR
  A[Client] -->|REST| B(API NestJS)
  B -->|Prisma| C[(Postgres)]
  B -->|enqueue| D[Redis Queue]
  D --> E[Worker Payments]
  E -->|update| C
  F[Payment Provider (fake/Stripe)] -->|Webhook| B
  B -->|Idempotency| C
```
