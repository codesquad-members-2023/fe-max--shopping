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

    const closeButton = this.domNode.querySelector(".close");

    closeButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggle();
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

        const sideBarItems = inner.querySelectorAll('[tabindex="-1"]');
        const backButton = detailNode.querySelector(".back");

        sideBarItems.forEach((sideBarItem, i) => {
          const limit = sideBarItems.length;
          const prev = sideBarItems[(i + sideBarItems.length - 1) % limit];
          const next = sideBarItems[(i + 1) % limit];

          sideBarItem.addEventListener("keydown", (e) => {
            e.preventDefault();
            if (e.shiftKey && e.key === "Tab") {
              backButton.focus();

              const backButtonKeydownHandler = (e) => {
                switch (e.key) {
                  case "Tab":
                    e.preventDefault()
                    sideBarItem.focus();
                    backButton.removeEventListener(
                      "keydown",
                      backButtonKeydownHandler
                    );
                    return;
                  case "Enter":
                    detailNode.className = "detail";
                    setTimeout(() => {
                      button.focus();
                    }, 300);
                    backButton.removeEventListener(
                      "keydown",
                      backButtonKeydownHandler
                    );
                    return;
                }
              };

              backButton.addEventListener("keydown", backButtonKeydownHandler);

              return;
            }
            switch (e.key) {
              case "ArrowUp":
                prev.focus();
                break;
              case "ArrowDown":
                next.focus();
                break;
              case "Tab":
                closeButton.focus();
                const closeButtonKeydownHandler = (e) => {
                  e.preventDefault();
                  if (e.shiftKey && e.key === "Tab") {
                    sideBarItem.focus();
                    closeButton.removeEventListener(
                      "keydown",
                      closeButtonKeydownHandler
                    );
                    return;
                  }
                  switch (e.key) {
                    case "Tab":
                    case "Enter":
                      detailsTag.open = false;
                      this.toggle();
                      detailNode.className = "detail";
                      closeButton.removeEventListener(
                        "keydown",
                        closeButtonKeydownHandler
                      );
                      return;
                  }
                };

                closeButton.addEventListener(
                  "keydown",
                  closeButtonKeydownHandler
                );
            }
          });
        });
        setTimeout(() => {
          sideBarItems[0].focus();
        }, 300);
      });
    });

    const backButton = this.domNode.querySelector(".back");

    backButton.addEventListener("click", () => {
      detailNode.className = "detail";
    });

    const detailsTag = this.domNode.querySelector("details");
    const detailsSub = detailsTag.querySelector(".sidebar__sub");

    detailsTag.addEventListener("click", () => {
      if (!detailsTag.open) {
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

    interactiveElements.forEach((elem, i) => {
      const prevIndex =
        (i - 1 + interactiveElements.length) % interactiveElements.length;
      const nextIndex = (i + 1) % interactiveElements.length;
      elem.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            e.stopPropagation();
            if (elem.tagName === "DETAILS") {
              elem.open = false;
              setTimeout(() => {
                detailsSub.style.opacity = "1";
                interactiveElements[prevIndex].focus();
              }, 1);
              return;
            } else {
              interactiveElements[prevIndex].focus();
              return;
            }
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
                closeButton.removeEventListener(
                  "keydown",
                  closeButtonKeyDownHandler
                );
                return;
              }
              switch (e.key) {
                case "Tab":
                case "Enter":
                  this.toggle();
                  closeButton.removeEventListener(
                    "keydown",
                    closeButtonKeyDownHandler
                  );
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
