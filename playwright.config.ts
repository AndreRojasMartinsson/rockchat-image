import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve("./tests/global-setup.ts"),
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: "on-first-retry",
    headless: true,
  },
  testDir: "tests",
  timeout: 35000,
  webServer: {
    command: "npm run dev",
    port: 3000,
    timeout: 25000,
    reuseExistingServer: !process.env.CI,
  },
  workers: 6,
  projects: [
    {
      name: `chromium+dev+js`,
      use: {
        javaScriptEnabled: true,
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: `firefox+dev+js`,
      use: {
        javaScriptEnabled: true,
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: `chromium+dev-js`,
      use: {
        javaScriptEnabled: false,
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: `firefox+dev-js`,
      use: {
        javaScriptEnabled: false,
        ...devices["Desktop Firefox"],
      },
    },
  ],
};

export default config;
