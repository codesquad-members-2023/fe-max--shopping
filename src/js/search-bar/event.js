import {
    $,
    $All,
    addDimming,
    removeDimming,
    showLayer,
    hideLayer,
} from "../utils.js";

async function getData() {
    try {
        const response = await fetch("./src/data/db.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

getData();

export const addSearchBarEventListener = async () => {
    const searchInput = $(".search-bar__input");
    const suggestedSearch = $(".search-bar__suggest");
    const suggestItems = suggestedSearch.children;
    const main = $(".main");
    const firstItem = suggestItems[0];
    const lastItem = suggestItems[suggestItems.length - 1];
    // const data = await getData();

    searchInput.addEventListener("focus", (e) => {
        showLayer(suggestedSearch);
        addDimming(main);
    });

    searchInput.addEventListener("blur", () => {
        hideLayer(suggestedSearch);
        removeDimming(main);
    });

    let selected = "";

    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
        }

        if (!selected) {
            if (e.key === "ArrowUp") {
                selected = lastItem;
                searchInput.value = selected.textContent.trim();
                selected.classList.add("selected");
                selected.previousElementSibling.classList.remove("selected");
                return;
            }
            if (e.key === "ArrowDown") {
                selected = firstItem;
                searchInput.value = selected.textContent.trim();
                selected.classList.add("selected");
                selected.nextElementSibling.classList.remove("selected");
                return;
            }
        }
        if (e.key === "ArrowUp") {
            if (selected === firstItem) {
                firstItem.classList.remove("selected");
                selected = "";
                return;
            }
            selected = selected.previousElementSibling;
            searchInput.value = selected.textContent.trim();
            selected.nextElementSibling.classList.remove("selected");
            selected.classList.add("selected");
            return;
        }
        if (e.key === "ArrowDown") {
            if (selected === lastItem) {
                lastItem.classList.remove("selected");
                selected = "";
                return;
            }
            selected = selected.nextElementSibling;
            searchInput.value = selected.textContent.trim();
            selected.previousElementSibling.classList.remove("selected");
            selected.classList.add("selected");
            return;
        }
    });

    // searchInput.addEventListener("input", async (e) => {
    //     console.log(e.target.value);
    //     console.log(data);
    //     for (const suggest in Object.keys(data)) {
    //         console.log(suggest);
    //     }
    //     if (e.target.value === "아그렇구나") {
    //         console.log("좋아");
    //     }
    // });
};
