import {
  loginModalExpandContainers,
  TIME,
  OPACITY,
  loginModalExpand,
  loginModalTail,
} from "./constant";

export async function expandLoginModalWithDelay() {
  await loginModalExpandContainers.expandWithDelay();
  await delay(TIME.LOGIN_EXPAND_DELAY);
  loginModalExpand.elementStyler.setOpacity(OPACITY.FULL);
  loginModalTail.elementStyler.setTransform(moveToX, moveToY);
}
