import test, { expect } from "@playwright/test";

test.describe("Article Tests", () => {
  test("should be able to publish articles", async ({ page }) => {
    await page.goto("/#/login");

    await page.locator('[placeholder="Email"]').fill("gtr@test.com");
    await page.locator('[placeholder="Password"]').fill("gtr@test.com");
    await page.locator('button:has-text("Sign in")').click();
    await expect(page).toHaveTitle("Home — Conduit");

    await page.locator("text=New Article").click();
    await expect(page).toHaveTitle("Editor — Conduit");

    await page.locator('[placeholder="Article Title"]').fill("New-playwright123345");

    await page
      .locator('[placeholder="What\\\'s this article about\\?"]')
      .fill("playwright subject");

    await page.locator("textarea").fill("test");

    await page.locator('[placeholder="Enter tags"]').fill("tage");

    await page.locator("text=Publish Article").click();

    await page.waitForResponse((response) =>
      response.url().includes("https://api.realworld.io/api/articles") && response.status() === 200
    );
  });
});
