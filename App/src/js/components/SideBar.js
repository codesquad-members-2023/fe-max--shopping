import { getCategory } from "../util/apiFetcher.js";
import { addEvent, findEvent, getAccountRecipe } from "../util/factory.js";
import { recipeToComponent } from "../util/recipeToComponent.js";
import { Component } from "./Component.js";

export class Sidebar extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }

  setEvent() {
    const aside = this.domNode.querySelector("ASIDE");
    aside.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    this.domNode.addEventListener("click", this.toggle.bind(this));
    addEvent("sidebarToggle", this.toggle.bind(this));

    const sidebarSubs = this.domNode.querySelectorAll(".sidebar__sub");
    const sidebarDetails = this.domNode.querySelector(".sidebar__details");

    sidebarDetails.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    const detailNode = this.domNode.querySelector(".detail");

    sidebarSubs.forEach((sidebarSub) => {
      sidebarSub.addEventListener("click", async (e) => {
        e.stopPropagation();
        const button = e.target.closest("button");
        if (!button) return;
        const categoryId = sidebarSub.dataset.category;
        const category = await getCategory(categoryId);
        const details = category["detail"];
        const detailIndex = button.dataset.detailIndex;
        const detail = details[detailIndex];

        if (!detail) return;

        const temp = recipeToComponent(
          getAccountRecipe().sidebarDetail(detail)
        ).domNode;

        const tempInner = temp.querySelector(".inner");

        const inner = detailNode.querySelector(".inner");
        inner.replaceChildren();

        Array.from(tempInner.children).forEach((child) => {
          inner.appendChild(child);
        });

        detailNode.className = "detail active";
      });
    });

    const backButton = this.domNode.querySelector(".back");

    backButton.addEventListener("click", () => {
      detailNode.className = "detail";
    });

    const details = this.domNode.querySelector("details");
    const detailsSub = details.querySelector(".sidebar__sub");
    details.addEventListener("click", () => {
      if (!details.open) {
        setTimeout(() => {
          detailsSub.style.opacity = "1";
        }, 1);
        return;
      }
      setTimeout(() => {
        detailsSub.style.opacity = "0";
      }, 1);
    });

    const interactiveElements = this.domNode.querySelectorAll(
      ".sidebar__sub [tabindex='-1']"
    );

    const closeButton = this.domNode.querySelector(".close");
    closeButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggle();
    });

    interactiveElements.forEach((elem, i) => {
      const prevIndex =
        (i - 1 + interactiveElements.length) % interactiveElements.length;
      const nextIndex = (i + 1) % interactiveElements.length;
      elem.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            e.stopPropagation();
            interactiveElements[prevIndex].focus();
            return;
          case "ArrowDown":
            e.preventDefault();
            e.stopPropagation();
            if (elem.tagName === "DETAILS") {
              elem.open = true;
              setTimeout(() => {
                detailsSub.style.opacity = "1";
                interactiveElements[nextIndex].focus();
              }, 1);
              return;
            } else {
              interactiveElements[nextIndex].focus();
              return;
            }
          case "Tab":
            e.preventDefault();
            e.stopPropagation();
            closeButton.focus();

            const closeButtonKeyDownHandler = (e) => {
              e.preventDefault();
              if (e.shiftKey && e.key === "Tab") {
                elem.focus();
                closeButton.removeEventHandler(closeButtonHandler);
                return;
              }
              switch (e.key) {
                case "Tab":
                case "Enter":
                  this.toggle();
                  closeButton.removeEventHandler(closeButtonHandler);
                  return;
              }
            };

            closeButton.addEventListener("keydown", closeButtonKeyDownHandler);
        }
      });
    });
  }

  load() {
    this.domNode.style.opacity = "0";
    setTimeout(() => {
      this.domNode.style.opacity = "1";
    }, 1000);

    this.setEvent();

    this.children.forEach((child) => {
      child.load();
    });
  }

  toggle() {
    this.domNode.classList.toggle("active");
    if (this.domNode.className === "active") {
      this.domNode.querySelector('[tabindex="-1"]').focus();
      return;
    }
    findEvent("SidebarTriggerFocus")();
  }
}
