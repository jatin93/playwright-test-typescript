import { expect, Page } from "@playwright/test";

export class AddArticlePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async validateRedirectionToAddArticlePage() {
    await expect(this.page).toHaveTitle("Editor — Conduit");
  }

  public async addArticle() {
    await this.page
      .locator('[placeholder="Article Title"]')
      .fill("New-playwright12345");

    await this.page
      .locator('[placeholder="What\\\'s this article about\\?"]')
      .fill("playwright subject");

    await this.page.locator("textarea").fill("test");

    await this.page.locator('[placeholder="Enter tags"]').fill("tage");

    await this.page.locator("text=Publish Article").click();
  }

  public async isArticleCreated() {
    await this.page.waitForResponse(
      (response) =>
        response.url().includes("https://api.realworld.io/api/articles") &&
        response.status() === 200
    );
  }
}
