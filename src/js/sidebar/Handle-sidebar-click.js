import { EarlySidebar } from "./Sidebar-early.js";
import { ExpandEarlySidebar } from "./Sidebar-expand.js";
import { DetailSidebar } from "./Sidebar-detail.js";
import { setZindex } from "../util/set-style.js";
import { Z_INDEX } from "../constant.js";

export function handleSidebarMenuClick() {
  const sidebarEle = document.querySelector(".menu-sidebar");
  const menuContainer = document.querySelector(".menu-container");

  menuContainer.addEventListener("click", (e) => {
    const targetClass = e.target.className;

    if (targetClass === "menu-container") {
      const earlySidebar = new EarlySidebar(sidebarEle);
      earlySidebar.addSidebarContent();
      setZindex(sidebarEle, Z_INDEX.MAX_Z);
    }
    if (targetClass === "sidebar-close") {
      setZindex(sidebarEle, Z_INDEX.LOWEST_Z);
    }
    if (targetClass === "sidebar-unfold") {
      const expandEarlySidebar = new ExpandEarlySidebar(sidebarEle);
      expandEarlySidebar.addSidebarContent();
    }
    if (targetClass === "sidebar-fold") {
      const earlySidebar = new EarlySidebar(sidebarEle);
      earlySidebar.addSidebarContent();
    }
    if (targetClass === "sidebar-back-to-menu") {
      const expandEarlySidebar = new ExpandEarlySidebar(sidebarEle);
      expandEarlySidebar.addSidebarContent();
    }
    if (e.target.textContent === "자동차 용품") {
      const detailSidebar = new DetailSidebar();
      detailSidebar.addSidebarContent();
    }
  });
}
