import { showLoginModalOnLoad } from "./modal/modal.js";
import {
    addLoginEventListeners,
    addAddressEventListeners,
} from "./modal/event.js";
import { init } from "./hero/hero.js";

function initModal() {
    showLoginModalOnLoad();
    addLoginEventListeners();
    addAddressEventListeners();
}

initModal();
init();
