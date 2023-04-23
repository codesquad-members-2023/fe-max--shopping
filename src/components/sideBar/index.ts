import { renderSideBar } from "./sideBarController";
import { addSideBarEvent } from "./sideBarView";

export const initSideBar = () => {
  renderSideBar() //
    .then(addSideBarEvent);
};
