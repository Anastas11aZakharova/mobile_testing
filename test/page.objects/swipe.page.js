import { $ } from "@wdio/globals";

class SwipePage {
  get swipePageTitle() {
    return $('//android.widget.TextView[@text="Swipe horizontal"]');
  }
  get jsFoundationCard() {
    return $('(//android.view.ViewGroup[@content-desc="card"])[3]');
  }
  get fullyOpenSourceCard() {
    return $('(//android.view.ViewGroup[@content-desc="card"])[1]');
  }

  async swipeLeftFullyOpenSourceCard() {
    await this.fullyOpenSourceCard.touchAction([
      {
        action: "press",
        x: 95,
        y: 50,
      },
      {
        action: "wait",
        ms: 1000,
      },
      {
        action: "moveTo",
        x: 5,
        y: 50,
      },
      {
        action: "release",
      },
    ]);
    driver.pause(1000);
  }
}

export default new SwipePage();
