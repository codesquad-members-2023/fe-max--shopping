import {
    $,
    $All,
    addDimming,
    removeDimming,
    showLayer,
    hideLayer,
} from "../utils.js";
import { isOutsideElement } from "./search-bar.js";

export const addSearchBarEventListener = () => {
    const searchBar = $(".search-bar");
    const searchInput = $(".search-bar__input");
    const suggestedSearch = $(".search-bar__suggest");
    const suggestItems = suggestedSearch.children;
    const main = $(".main");

    const removeEvent = (e) => {
        if (isOutsideElement(e.target, searchBar)) {
            hideLayer(suggestedSearch);
            removeDimming(main);
            document.removeEventListener("click", removeEvent);
        }
    };

    searchBar.addEventListener("click", (e) => {
        if (e.target === searchInput) {
            showLayer(suggestedSearch);
            addDimming(main);
            document.addEventListener("click", removeEvent);
        }
    });

    const firstItem = suggestItems[0];
    const lastItem = suggestItems[suggestItems.length - 1];

    searchBar.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
        }
        let focused = document.activeElement;

        if (focused === searchInput) {
            if (e.key === "ArrowUp") {
                lastItem.focus();
                focused = lastItem;
                return;
            }
            if (e.key === "ArrowDown") {
                firstItem.focus();
                focused = firstItem;
                return;
            }
        }
        if (e.key === "ArrowUp") {
            if (focused === firstItem) {
                searchInput.focus();
                return;
            }
            focused = focused.previousElementSibling;
        }
        if (e.key === "ArrowDown") {
            if (focused === lastItem) {
                searchInput.focus();
                return;
            }
            focused = focused.nextElementSibling;
        }

        focused.focus();
    });

    searchBar.addEventListener("input", () => {
        console.log("응");
    });
};
