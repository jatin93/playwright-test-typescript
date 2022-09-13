import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",

  use: { baseURL: "http://demo.realworld.io" },
  timeout: 30000,
  expect: { timeout: 3000 },
  reporter: [["html", { outputFolder: "test-report" }]],
};
export default config;
