import { EarlySidebar } from "./Sidebar-early.js";
import { ExpandEarlySidebar } from "./Sidebar-expand.js";
import { DetailSidebar } from "./Sidebar-detail.js";
import { querySelector } from "../query.js";
import { setZindex } from "../util/set-style.js";
import { Z_INDEX, DELAY_TIME } from "../constant.js";
import { delay } from "../util/delay.js";

async function addAndRenderTemplate(sidebar) {
  sidebar.addTemplate();
  await delay(DELAY_TIME.FETCH_FROM_DB);
  sidebar.renderTemplate();
}

export function handleSidebarMenuClick() {
  const subNav = document.querySelector(".navigation-sub");
  const menu = subNav.querySelector(".menu-container");
  menu.addEventListener("click", async (e) => {
    const targetClass = e.target.className;
    const targetId = e.target.id;
    const earlySidebar = new EarlySidebar();
    const expandEarlySidebar = new ExpandEarlySidebar();
    const detailSidebar = new DetailSidebar();

    switch (true) {
      case targetClass === "menu-container":
        setZindex(querySelector.sidebar(), Z_INDEX.MAX_Z);
        addAndRenderTemplate(earlySidebar);
        break;

      case targetClass === "sidebar-close":
        setZindex(querySelector.sidebar(), Z_INDEX.LOWEST_Z);
        break;

      case targetClass === "sidebar-unfold":
        addAndRenderTemplate(expandEarlySidebar);
        break;

      case targetClass === "sidebar-fold":
        addAndRenderTemplate(earlySidebar);
        break;

      case targetClass === "sidebar-back-to-menu":
        addAndRenderTemplate(expandEarlySidebar);
        break;

      case targetId === "car-supplies":
        addAndRenderTemplate(detailSidebar);
        break;

      default:
        break;
    }
  });
}
