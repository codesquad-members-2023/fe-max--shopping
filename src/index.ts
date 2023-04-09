import { initMain } from "./main";
import { initNavBar } from "./navBar";

const init = () => {
  initNavBar();
  initMain();
};

document.addEventListener("DOMContentLoaded", init);
