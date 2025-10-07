import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: ".",
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  clearMocks: true,
  maxWorkers: 1,
};
export default config;
