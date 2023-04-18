import { showLoginModalOnLoad } from "./modal/modal.js";
import {
    addLoginEventListeners,
    addAddressEventListeners,
} from "./modal/event.js";
import { addSearchBarEventListener } from "./search-bar/event.js";
import { HandlerSideBar } from "./sideBar/event.js";

const initModal = () => {
    showLoginModalOnLoad();
    addLoginEventListeners();
    addAddressEventListeners();
};

initModal();

const initSearchBar = () => {
    addSearchBarEventListener();
};

initSearchBar();
HandlerSideBar();
