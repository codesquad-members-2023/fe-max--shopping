import { slideLoadEventHandler, slideNextBtnClickEventHandler, slidePrevBtnClickEventHandler, slideTransitionendEventHandler, slideAutoEventHandler } from "./carousel-event.js";

export function initSlideEvent() {
  slideLoadEventHandler();
  slideNextBtnClickEventHandler();
  slidePrevBtnClickEventHandler();
  slideTransitionendEventHandler();
  slideAutoEventHandler();
}
