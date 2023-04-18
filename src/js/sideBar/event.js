import {
    $,
    $All,
    addDimming,
    removeDimming,
    showLayer,
    hideLayer,
} from "../utils.js";

export const HandlerSideBar = () => {
    const sidebarToggleBtn = $(".side-bar");
    const sideBarLayer = $(".side-bar-layer");
    const sidebarCloseBtn = $(".side-bar-layer-close");
    const sideBarLayerContainer = $(".side-bar-layer__detail-container");
    const ex = $(".side-bar-layer__ex");
    const backButton = $(".back-button");
    //const sideBarDetailButton = sideBarLayer.querySelector(".category-sub");

    sidebarToggleBtn.addEventListener("click", () => {
        sideBarLayer.style.transform = "translate(0px)";
        sidebarCloseBtn.style.opacity = 1;
    });

    sidebarCloseBtn.addEventListener("click", () => {
        sideBarLayer.style.transform = "translate(-332px)";
        sidebarCloseBtn.style.opacity = 0;
    });

    sideBarLayer.addEventListener("click", (e) => {
        if (e.target.closest(".category-sub")) {
            console.log(sideBarLayerContainer);
            sideBarLayerContainer.style.transform = "translate(-320px)";
        }
    });

    backButton.addEventListener("click", () => {
        sideBarLayerContainer.style.transform = "translate(0px)";
    });
};
