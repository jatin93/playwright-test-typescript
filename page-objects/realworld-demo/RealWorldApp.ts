import { Page } from "@playwright/test";
import { AddArticlePage } from "./AddArticlePage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export class RealworldApp {
  protected readonly page: Page;
  protected loginPage: LoginPage;
  protected homePage: HomePage;
  protected addArticlePage: AddArticlePage;

  constructor(page: Page) {
    this.page = page;
  }

  public get LoginPage(): LoginPage {
    return this.loginPage ?? (this.loginPage = new LoginPage(this.page));
  }

  public get HomePage(): HomePage {
    return this.homePage ?? (this.homePage = new HomePage(this.page));
  }

  public get AddArticlePage(): AddArticlePage {
    return this.addArticlePage ?? (this.addArticlePage = new AddArticlePage(this.page));
  }
}
