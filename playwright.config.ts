import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",

  use: { baseURL: "http://demo.realworld.io", headless: true, screenshot: "only-on-failure" },
  timeout: 30000,
  expect: { timeout: 5000 },
  reporter: [["html", { outputFolder: "test-report" }]],
  
};
export default config;
