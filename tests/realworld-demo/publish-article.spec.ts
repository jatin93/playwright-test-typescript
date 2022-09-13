import test, { expect } from "@playwright/test";
import { RealworldApp } from "../../page-objects/realworld-demo/RealWorldApp";

test.describe("Article Tests", () => {
  test("should be able to publish articles", async ({ page }) => {
    const app = new RealworldApp(page);
    await app.LoginPage.navigateToLoginPage();
    await app.LoginPage.login();
    await app.HomePage.isUserLoggedIn();

    await app.HomePage.navigateToCreateArticlePage();
    await app.AddArticlePage.validateRedirectionToAddArticlePage();
    await app.AddArticlePage.addArticle();
    await app.AddArticlePage.isArticleCreated();
  });
});
