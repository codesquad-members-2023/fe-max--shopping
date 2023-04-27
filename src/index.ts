import { initMain } from "./components/main";
import { initNavBar } from "./components/navBar";
import { initSidebar } from "./components/sidebar";

const init = () => {
  initNavBar();
  initMain();
  initSidebar();
};

document.addEventListener("DOMContentLoaded", init);
