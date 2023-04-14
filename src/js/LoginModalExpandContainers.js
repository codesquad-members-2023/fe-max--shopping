import { DISPLAY, TIME } from "./constant";
import { BaseElement } from "./BaseElement";

export class LoginModalExpandContainers {
  constructor(elements) {
    this.baseElements = [...elements].map((element) => {
      return new BaseElement(element);
    });
  }

  async expandWithDelay() {
    const stylers = this.baseElements.map((baseElement) => baseElement.styler);

    for (const styler of stylers) {
      styler.setDisplay(DISPLAY.BLOCK);
      await delay(TIME.NONE_TO_BLOCK);
      styler.setSize(expandWidthSize, expandHeightSize);
    }
  }
}
