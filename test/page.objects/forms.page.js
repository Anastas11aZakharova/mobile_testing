import { $ } from "@wdio/globals";

class FormsPage {
  get formComponentsTitle() {
    return $('//android.widget.TextView[@text="Form components"]');
  }
  get switch() {
    return $('//android.widget.Switch[@content-desc="switch"]');
  }
  get inputField() {
    return $('//android.widget.EditText[@content-desc="text-input"]');
  }
  get youHaveTypedField() {
    return $('//android.widget.TextView[@content-desc="input-text-result"]');
  }
  get activeBtn() {
    return $('//android.view.ViewGroup[@content-desc="button-Active"]');
  }
  get popUpMessage() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]');
  }

  async tapOnSwitch() {
    await this.switch.touchAction([
      {
        action: "tap",
      },
      {
        action: "wait",
        ms: 1000,
      },
    ]);
    driver.pause(1000);
  }
  async enterTextInInputField(text) {
    await this.inputField.setValue(text);
  }
  async clickOnActiveBtn() {
    await this.activeBtn.click();
  }
}

export default new FormsPage();
