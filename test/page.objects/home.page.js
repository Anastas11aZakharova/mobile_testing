import { $ } from "@wdio/globals";

class HomePage {
  get loginBtn() {
    return $(`~Login`);
  }
  get swipeBtn() {
    return $(`~Swipe`);
  }
  get formsBtn() {
    return $(`~Forms`);
  }
  
  async clickOnLoginBtn() {
    await this.loginBtn.click();
  }
  async clickOnSwipeBtn() {
    await this.swipeBtn.click();
  }
  async clickOnFormsBtn() {
    await this.formsBtn.click();
  }
}

export default new HomePage();
