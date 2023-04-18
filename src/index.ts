import { initMain } from "./components/main";
import { initNavBar } from "./components/navBar";

const init = () => {
  initNavBar();
  initMain();
};

document.addEventListener("DOMContentLoaded", init);
