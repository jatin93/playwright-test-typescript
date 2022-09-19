import { test } from "../../custom-fixture/baseFixture"
import { RealworldApp } from "../../page-objects/realworld-demo/RealWorldApp";

test.describe("Login tests", function () {
  test("Should be able to logins", async ({ page, user }) => {
    console.log(JSON.stringify({ user}));
    const app = new RealworldApp(page);
    await app.LoginPage.navigateToLoginPage();
    await app.LoginPage.login(user);
    await app.HomePage.isUserLoggedIn();
  });
});