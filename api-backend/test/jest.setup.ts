import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

process.env.NODE_ENV = "test";

const envTestPath = path.resolve(process.cwd(), ".env.test");
if (fs.existsSync(envTestPath)) {
  for (const raw of fs.readFileSync(envTestPath, "utf8").split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const [k, ...rest] = line.replace(/^export\s+/, "").split("=");
    const v = rest.join("=").replace(/^"|"$/g, "");
    if (k && v && !process.env[k]) process.env[k] = v;
  }
}

try {
  execSync("pnpm prisma migrate deploy --schema=./prisma/schema.prisma", {
    stdio: "inherit",
    env: { ...process.env },
  });
} catch (e) {}

execSync(
  "pnpm prisma db push --schema=./prisma/schema.prisma --skip-generate",
  {
    stdio: "inherit",
    env: { ...process.env },
  }
);
