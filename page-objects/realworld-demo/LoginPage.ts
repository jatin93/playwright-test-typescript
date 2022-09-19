import {Locator, Page } from "@playwright/test";
import { UserCredentials } from "../../data-modals/UserCredentials";

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

  public async login(user : UserCredentials) {
    await this.userNameInput.fill(user.email);
    await this.userPasswordInput.fill(user.password);
    await this.signInBtn.click();
  }

  public async navigateToLoginPage() {
    await this.page.goto("/#/login");
  }
}
