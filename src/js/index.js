import { showLoginModalOnLoad } from "./modal/modal.js";
import {
    attachLoginEventListeners,
    attachAddressEventListeners,
} from "./modal/event.js";

function initModal() {
    showLoginModalOnLoad();
    attachLoginEventListeners();
    attachAddressEventListeners();
}

initModal();
