import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: ".",
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["<rootDir>/test/**/*.e2e-spec.ts"],
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  maxWorkers: 1,
};
export default config;
