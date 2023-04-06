import { showLoginModalOnLoad } from "./modal/modal.js";
import {
    addLoginEventListeners,
    addAddressEventListeners,
} from "./modal/event.js";

function initModal() {
    showLoginModalOnLoad();
    addLoginEventListeners();
    addAddressEventListeners();
}

initModal();
