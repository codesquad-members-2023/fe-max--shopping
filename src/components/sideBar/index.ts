import { addSideBarEvent, renderSideBar } from "./sideBarView";

export const initSideBar = () => {
  renderSideBar() //
    .then(addSideBarEvent);
};
