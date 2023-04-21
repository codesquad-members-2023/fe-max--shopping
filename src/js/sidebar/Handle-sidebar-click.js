import { EarlySidebar } from "./Sidebar-early.js";
import { ExpandEarlySidebar } from "./Sidebar-expand.js";
import { DetailSidebar } from "./Sidebar-detail.js";
import { querySelector } from "../query.js";
import { setZindex } from "../util/set-style.js";
import { Z_INDEX } from "../constant.js";
import { delay } from "../util/delay.js";

async function addAndRenderTemplate(sidebar) {
  sidebar.addTemplate();
  await delay(50);
  sidebar.renderTemplate();
}

export function handleSidebarMenuClick() {
  querySelector.menu().addEventListener("click", async (e) => {
    const targetClass = e.target.className;
    const targetId = e.target.id;
    const earlySidebar = new EarlySidebar();
    const expandEarlySidebar = new ExpandEarlySidebar();
    const detailSidebar = new DetailSidebar();

    if (targetClass === "menu-container") {
      setZindex(querySelector.sidebar(), Z_INDEX.MAX_Z);
      addAndRenderTemplate(earlySidebar);
    }

    if (targetClass === "sidebar-close") {
      setZindex(querySelector.sidebar(), Z_INDEX.LOWEST_Z);
    }

    if (targetClass === "sidebar-unfold") {
      addAndRenderTemplate(expandEarlySidebar);
    }

    if (targetClass === "sidebar-fold") {
      addAndRenderTemplate(earlySidebar);
    }

    if (targetClass === "sidebar-back-to-menu") {
      addAndRenderTemplate(expandEarlySidebar);
    }

    if (targetId === "car-supplies") {
      addAndRenderTemplate(detailSidebar);
    }
  });
}
