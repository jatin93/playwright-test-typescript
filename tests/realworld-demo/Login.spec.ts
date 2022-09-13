import test, { expect } from "@playwright/test";
import { RealworldApp } from "../../page-objects/realworld-demo/RealWorldApp";

test.describe("Login tests", function () {
  test("Should be able to logins", async ({ page }) => {
    const app = new RealworldApp(page);
    await app.LoginPage.navigateToLoginPage();
    await app.LoginPage.login();
    await app.HomePage.isUserLoggedIn();
  });
});
