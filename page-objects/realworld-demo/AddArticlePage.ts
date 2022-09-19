import { expect, Page } from "@playwright/test";
import { ArticleData } from "../../data-modals/ArticleData";

export class AddArticlePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async validateRedirectionToAddArticlePage() {
    await expect(this.page).toHaveTitle("Editor — Conduit");
  }

  public async addArticle(articleData: ArticleData) {
    await this.page.locator('[placeholder="Article Title"]').fill(articleData.tittle);

    await this.page
      .locator('[placeholder="What\\\'s this article about\\?"]')
      .fill(articleData.subject);

    await this.page.locator("textarea").fill(articleData.text);

    await this.page.locator('[placeholder="Enter tags"]').fill(articleData.tags);

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
