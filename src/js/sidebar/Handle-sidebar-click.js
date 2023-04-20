import { EarlySidebar } from "./Sidebar-early.js";
import { ExpandEarlySidebar } from "./Sidebar-expand.js";
import { DetailSidebar } from "./Sidebar-detail.js";
import { querySelector } from "../query.js";
import { setZindex } from "../util/set-style.js";
import { Z_INDEX } from "../constant.js";

export function handleSidebarMenuClick() {
  querySelector.menu().addEventListener("click", (e) => {
    const targetClass = e.target.className;
    const targetId = e.target.id;

    if (targetClass === "menu-container") {
      const earlySidebar = new EarlySidebar(querySelector.sidebar());
      earlySidebar.addSidebarContent();
      setZindex(querySelector.sidebar(), Z_INDEX.MAX_Z);
    }
    if (targetClass === "sidebar-close") {
      setZindex(querySelector.sidebar(), Z_INDEX.LOWEST_Z);
    }
    if (targetClass === "sidebar-unfold") {
      const expandEarlySidebar = new ExpandEarlySidebar(querySelector.sidebar());
      expandEarlySidebar.addSidebarContent();
    }
    if (targetClass === "sidebar-fold") {
      const earlySidebar = new EarlySidebar(querySelector.sidebar());
      earlySidebar.addSidebarContent();
    }
    if (targetClass === "sidebar-back-to-menu") {
      const expandEarlySidebar = new ExpandEarlySidebar(querySelector.sidebar());
      expandEarlySidebar.addSidebarContent();
    }
    if (targetId === "car-supplies") {
      const detailSidebar = new DetailSidebar();
      detailSidebar.addSidebarContent();
    }
  });
}
