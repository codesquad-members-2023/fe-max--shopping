import { showLoginModalOnLoad, addLoginEventListeners } from "./loginModalController";
import { initSearchBar } from "./searchBar";
import { addShippingAddressEventListeners } from "./shippingAddressController";

export const initNavBar = () => {
  showLoginModalOnLoad();
  addShippingAddressEventListeners();
  addLoginEventListeners();
  initSearchBar();
};
