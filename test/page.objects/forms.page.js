import { $ } from "@wdio/globals";

class FormsPage {
  get formComponentsTitle() {
    return $('//android.widget.TextView[@text="Form components"]');
  }
  get switch() {
    return $('//android.widget.Switch[@content-desc="switch"]');
  }
  
  async tapOnSwitch() {
    await this.switch.touchAction([{
      action: 'tap'
  }, {
      action: 'wait',
      ms: 1000 ,
  }
  ]);
  driver.pause(1000);
  }
}

export default new FormsPage();
