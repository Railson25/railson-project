import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().optional(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().default(3000),
  CORS_ORIGIN: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>): Env {
  const parsed = envSchema.safeParse(config);
  if (!parsed.success) {
    console.log(
      "Invalid environment variables",
      parsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}
