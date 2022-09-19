import { expect } from "@playwright/test";
import { test } from "../../custom-fixture/baseFixture"
import { RealworldApp } from "../../page-objects/realworld-demo/RealWorldApp";

test.describe("Article Tests", () => {
  test("should be able to publish articles", async ({ page , user, articleData }) => {
    const app = new RealworldApp(page);
    await app.LoginPage.navigateToLoginPage();
    await app.LoginPage.login(user);
    await app.HomePage.isUserLoggedIn();

    await app.HomePage.navigateToCreateArticlePage();
    await app.AddArticlePage.validateRedirectionToAddArticlePage();
    await app.AddArticlePage.addArticle(articleData);
    await app.AddArticlePage.isArticleCreated();
  });
});
