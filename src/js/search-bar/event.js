import { $, $All } from "../utils.js";
import { addDimming, removeDimming } from "../utils.js";

export const addSearchBarEventListener = () => {
    const searchBar = $(".search-bar");
    const inputBar = $(".search-bar__input");
    const recommendationsLayer = $(".search-bar__recs");
    const recsItems = recommendationsLayer.children;

    const removeEvent = (e) => {
        if (!searchBar.contains(e.target)) {
            recommendationsLayer.classList.remove("show");
            removeDimming(".main");
            document.removeEventListener("click", removeEvent);
        }
    };

    searchBar.addEventListener("click", (e) => {
        if (e.target === inputBar) {
            recommendationsLayer.classList.add("show");
            addDimming(".main");
            document.removeEventListener("click", removeEvent);
        }
    });

    document.removeEventListener("click", removeEvent);

    searchBar.addEventListener("click", (e) => {
        document.addEventListener("click", removeEvent);
    });

    searchBar.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
        }
        let focused = document.activeElement;

        if (document.activeElement === inputBar) {
            if (e.key === "ArrowUp") {
                recsItems[recsItems.length - 1].focus();
                focused = recsItems[recsItems.length - 1];
                return;
            } else if (e.key === "ArrowDown") {
                recsItems[0].focus();
                focused = recsItems[0];
                return;
            }
        } else {
            if (e.key === "ArrowDown") {
                if (document.activeElement.id === "last-item") {
                    inputBar.focus();
                    focused = inputBar;
                    return;
                }
                focused = focused.nextElementSibling || recsItems[0];
            } else if (e.key === "ArrowUp") {
                if (document.activeElement.id === "first-item") {
                    inputBar.focus();
                    focused = inputBar;
                    return;
                }
                focused =
                    focused.previousElementSibling ||
                    recsItems[recsItems.length - 1];
            }
        }

        focused.focus();
    });
};
