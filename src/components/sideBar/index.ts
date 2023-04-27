import { SidebarController } from "./sideBarController";
import { SidebarView } from "./sideBarView";

export const initSideBar = () => {
  new SidebarController(new SidebarView());
};
