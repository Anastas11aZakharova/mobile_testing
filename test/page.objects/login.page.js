import { $ } from "@wdio/globals";

class LoginPage {
  get loginBtn() {
    return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
  }
  get inputPassword() {
    return $('//android.widget.EditText[@content-desc="input-password"]');
  }
  get errorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    );
  }

  async clickOnLoginBtn() {
    await this.loginBtn.click();
  }
  async enterPassword(password) {
    await this.inputPassword.setValue(password);
  }
}

export default new LoginPage();
