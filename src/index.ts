import { initMain } from "./components/main";
import { initNavBar } from "./components/navBar";
import { initSideBar } from "./components/sideBar";

const init = () => {
  initNavBar();
  initMain();
  initSideBar();
};

document.addEventListener("DOMContentLoaded", init);
