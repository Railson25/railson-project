# Visão Geral

**Objetivo:** plataforma de billing com assinaturas mensais, invoices e pagamentos com robustez:

- Idempotência por requisição (tabela `IdempotencyKey`)
- Fila Redis + worker para processamento assíncrono
- Webhooks do provedor (deduplicação via `providerEventId`)
- Retry com backoff + reconciliação
- Observabilidade (Prometheus), Health (liveness/readiness)
- Testes unit e E2E; testes de carga (k6)

**Principais rotas**

- `POST /v1/customers`
- `POST /v1/subscriptions`
- `POST /v1/invoices/:id/pay` (idempotente)
- `POST /v1/webhooks/fake` (simulador)
- `GET /v1/metrics` (Prometheus)
- `GET /v1/health/*`

Veja **API Reference** no menu para detalhes de contrato.
