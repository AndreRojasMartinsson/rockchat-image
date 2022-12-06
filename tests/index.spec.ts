import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("should open webserver", async ({ page }) => {
  const bodyElement = page.locator("body");
  await expect(bodyElement).toBeDefined();
});
