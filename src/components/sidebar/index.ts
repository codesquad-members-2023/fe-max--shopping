import { SidebarController } from "./sidebarController";
import { SidebarView } from "./sidebarView";

export const initSidebar = () => {
  new SidebarController(new SidebarView());
};
