import test, { expect } from "@playwright/test";

test("Should be able to logins", async ({ page }) => {
  await page.goto("/#/login");

   await page.locator('[placeholder="Email"]').fill("gtr@test.com");
   await page.locator('[placeholder="Password"]').fill("gtr@test.com");
   await page.locator('button:has-text("Sign in")').click();
   await expect(page).toHaveTitle("Home — Conduit");
});
