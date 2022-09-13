import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  protected readonly page: Page;

  protected get userNameInput(): Locator {
    return this.page.locator('[placeholder="Email"]');
  }

  protected get userPasswordInput(): Locator {
    return this.page.locator('[placeholder="Password"]');
  }

  protected get signInBtn(): Locator {
    return this.page.locator('button:has-text("Sign in")');
  }

  constructor(page: Page) {
    this.page = page;
  }

  public async login() {
    await this.userNameInput.fill("gtr@test.com");
    await this.userPasswordInput.fill("gtr@test.com");
    await this.signInBtn.click();
  }

  public async navigateToLoginPage() {
    await this.page.goto("/#/login");
  }

  public async isUserLoggedIn() {
    await expect(this.page).toHaveTitle("Home — Conduit");
  }
}
