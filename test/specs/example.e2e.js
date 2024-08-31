import { expect } from "@wdio/globals";
import HomePage from "../page.objects/home.page.js";
import LoginPage from "../page.objects/login.page.js";
import Helper from "../page.objects/helper.js";
import SwipePage from "../page.objects/swipe.page.js";
import FormsPage from "../page.objects/forms.page.js";

describe("Mobile testing", () => {
  it("Login with empty email", async () => {
    await HomePage.clickOnLoginBtn();
    await expect(LoginPage.loginBtn).toBeExisting();
    await LoginPage.enterPassword(Helper.generateRandomString(7));
    await LoginPage.clickOnLoginBtn();
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveText("Please enter a valid email address");

  });
  it("Swipe checking", async () => {
   await HomePage.clickOnSwipeBtn();
   await expect(SwipePage.swipePageTitle).toBeExisting();
   await expect(SwipePage.swipePageTitle).toHaveText("Swipe horizontal");
   await expect(SwipePage.jsFoundationCard).not.toBeDisplayed();
   await SwipePage.swipeLeftFullyOpenSourceCard();
   await expect(SwipePage.jsFoundationCard).toBeDisplayed();
  });
  it("Tap on switch", async () => {
    await HomePage.clickOnFormsBtn();
    await expect(FormsPage.formComponentsTitle).toBeExisting();
    await expect(FormsPage.formComponentsTitle).toHaveText("Form components");
    await expect(FormsPage.switch).toBeExisting();
    await expect(FormsPage.switch).toHaveText("OFF");
    await FormsPage.tapOnSwitch();
    await expect(FormsPage.switch).toHaveText("ON");
   });
});
