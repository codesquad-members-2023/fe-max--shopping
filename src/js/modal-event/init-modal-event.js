import {
  addressModalMouseenterEventHandler,
  addressModalMouseleaveEventHandler,
} from "./address-modal-event-listener.js";

import { loginModalLoadEventHandler } from "./login-modal-event-listener.js";

export function initModalEvent() {
  addressModalMouseenterEventHandler();
  addressModalMouseleaveEventHandler();
  loginModalLoadEventHandler();
}
