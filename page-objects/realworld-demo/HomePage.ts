import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  protected readonly page: Page;

  protected get newArticleLink(): Locator {
    return this.page.locator("text=New Article");
  }

  public constructor(page: Page) {
    this.page = page;
  }

  public async isUserLoggedIn() {
    await expect(this.page).toHaveTitle("Home — Conduit");
  }

  public async navigateToCreateArticlePage() {
    await this.newArticleLink.click();
  }
}
