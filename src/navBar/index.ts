import { showLoginModalOnLoad, addLoginEventListeners } from "./loginModalController";
import { addShippingAddressEventListeners } from "./shippingAddressController";

export const initNavBar = () => {
  showLoginModalOnLoad();
  addShippingAddressEventListeners();
  addLoginEventListeners();
};
