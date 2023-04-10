import { addressModalMouseenterEventHandler, addressModalMouseleaveEventHandler } from "./address-modal-event-listener.js";

import { loginModalLoadEventHandler, loginModalMouseenterEventHandler, loginModalMouseleaveEventHandler, loginModalClickEventHandler } from "./login-modal-event-listener.js";

export function initModalEvent() {
  addressModalMouseenterEventHandler();
  addressModalMouseleaveEventHandler();
  loginModalLoadEventHandler();
  loginModalMouseenterEventHandler();
  loginModalMouseleaveEventHandler();
  loginModalClickEventHandler();
}
