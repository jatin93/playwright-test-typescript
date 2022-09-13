import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class RealworldApp {
  protected readonly page: Page;
  protected loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
  }

  public get LoginPage(): LoginPage {
    return this.loginPage ?? (this.loginPage = new LoginPage(this.page));
  }
}
