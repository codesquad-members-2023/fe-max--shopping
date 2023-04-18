import Items from "./components/sideBarItems";

class SideBar {
    constructor() {
        const $sideBar = document.querySelector("#side-bar__layer");
        new Items($sideBar);
    }
}

new SideBar();


