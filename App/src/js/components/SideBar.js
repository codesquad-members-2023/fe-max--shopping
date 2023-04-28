import { SidebarDetailRecipe } from "../recipes/sidebar/SidebarDetailRecipe.js";
import { getCategory } from "../utils/apiFetcher.js";
import { addEvent, findEvent } from "../utils/factory.js";
import { recipeToComponent } from "../utils/recipeToComponent.js";
import { Component } from "./Component.js";

export class Sidebar extends Component {
  constructor(component) {
    super();
    this.restructure(component);
    addEvent("sidebarToggle", this.toggle);
  }

  setThisEvent() {
    this.domNode.addEventListener("click", this.toggle);
  }

  setAsideEvent() {
    this.aside.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  sideBarItemEventHandler = (sideBarItem, i, sideBarItems) => {
    const limit = sideBarItems.length;
    const prev = sideBarItems[(i + sideBarItems.length - 1) % limit];
    const next = sideBarItems[(i + 1) % limit];

    sideBarItem.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.shiftKey && e.key === "Tab") {
        this.backButton.focus();

        const backButtonKeydownHandler = (e) => {
          switch (e.key) {
            case "Tab":
              e.preventDefault();
              sideBarItem.focus();
              this.backButton.removeEventListener(
                "keydown",
                backButtonKeydownHandler
              );
              return;
            case "Enter":
              this.detail.className = "detail";
              setTimeout(() => {
                button.focus();
              }, 300);
              this.backButton.removeEventListener(
                "keydown",
                backButtonKeydownHandler
              );
              return;
          }
        };

        this.backButton.addEventListener("keydown", backButtonKeydownHandler);

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
          this.closeButton.focus();
          const closeButtonKeydownHandler = (e) => {
            e.preventDefault();
            if (e.shiftKey && e.key === "Tab") {
              sideBarItem.focus();
              this.closeButton.removeEventListener(
                "keydown",
                closeButtonKeydownHandler
              );
              return;
            }
            switch (e.key) {
              case "Tab":
              case "Enter":
                this.details.open = false;
                this.toggle();
                this.detail.className = "detail";
                this.closeButton.removeEventListener(
                  "keydown",
                  closeButtonKeydownHandler
                );
                return;
            }
          };

          this.closeButton.addEventListener(
            "keydown",
            closeButtonKeydownHandler
          );
      }
    });
  };

  async sidebarSubClickHandler(e) {
    const { sidebar, sidebarSub } = this;
    e.stopPropagation();

    const button = e.target.closest("button");
    if (!button) return;

    const categoryId = sidebarSub.dataset.category;
    const category = await getCategory(categoryId);
    const detailsInfo = category["detail"];
    const detailIndex = button.dataset.detailIndex;
    const detailInfo = detailsInfo[detailIndex];

    if (!detailInfo) return;

    const temp = recipeToComponent(SidebarDetailRecipe(detailInfo)).domNode;
    const tempInner = temp.querySelector(".inner");
    const inner = sidebar.detail.querySelector(".inner");

    inner.replaceChildren();
    Array.from(tempInner.children).forEach((child) => {
      inner.appendChild(child);
    });
    sidebar.detail.className = "detail active";

    const sideBarItems = inner.querySelectorAll('[tabindex="-1"]');

    sidebar.backButton = sidebar.detail.querySelector(".back");
    sideBarItems.forEach(sidebar.sideBarItemEventHandler);
    setTimeout(() => {
      sideBarItems[0].focus();
    }, 300);
  }

  async sidebarSubKeydownHandler(e) {
    const { sidebar, sidebarSub } = this;
    e.stopPropagation();

    const button = e.target.closest("button");
    if (!button) return;

    const categoryId = sidebarSub.dataset.category;
    const category = await getCategory(categoryId);
    const detailsInfo = category["detail"];
    const detailIndex = button.dataset.detailIndex;
    const detailInfo = detailsInfo[detailIndex];

    if (!detailInfo) return;

    const temp = recipeToComponent(SidebarDetailRecipe(detailInfo)).domNode;
    const tempInner = temp.querySelector(".inner");
    const inner = sidebar.detail.querySelector(".inner");
    inner.replaceChildren();

    Array.from(tempInner.children).forEach((child) => {
      inner.appendChild(child);
    });

    sidebar.detail.className = "detail active";

    const sideBarItems = inner.querySelectorAll('[tabindex="-1"]');

    sideBarItems.forEach((sideBarItem, i) => {
      const limit = sideBarItems.length;
      const prev = sideBarItems[(i + sideBarItems.length - 1) % limit];
      const next = sideBarItems[(i + 1) % limit];

      sideBarItem.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (e.shiftKey && e.key === "Tab") {
          sidebar.backButton.focus();

          const backButtonKeydownHandler = (e) => {
            switch (e.key) {
              case "Tab":
                e.preventDefault();
                sideBarItem.focus();
                sidebar.backButton.removeEventListener(
                  "keydown",
                  backButtonKeydownHandler
                );
                return;
              case "Enter":
                sidebar.detail.className = "detail";
                setTimeout(() => {
                  button.focus();
                }, 300);
                sidebar.backButton.removeEventListener(
                  "keydown",
                  backButtonKeydownHandler
                );
                return;
            }
          };

          sidebar.backButton.addEventListener(
            "keydown",
            backButtonKeydownHandler
          );

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
            sidebar.closeButton.focus();
            const closeButtonKeydownHandler = (e) => {
              e.preventDefault();
              if (e.shiftKey && e.key === "Tab") {
                sideBarItem.focus();
                sidebar.closeButton.removeEventListener(
                  "keydown",
                  closeButtonKeydownHandler
                );
                return;
              }
              switch (e.key) {
                case "Tab":
                case "Enter":
                  sidebar.details.open = false;
                  sidebar.toggle();
                  sidebar.detail.className = "detail";
                  sidebar.closeButton.removeEventListener(
                    "keydown",
                    closeButtonKeydownHandler
                  );
                  return;
              }
            };

            sidebar.closeButton.addEventListener(
              "keydown",
              closeButtonKeydownHandler
            );
        }
      });
    });
    setTimeout(() => {
      sideBarItems[0].focus();
    }, 300);
  }

  sidebarSubEventHandler = (sidebarSub) => {
    sidebarSub.addEventListener(
      "click",
      this.sidebarSubClickHandler.bind({ sidebar: this, sidebarSub })
    );
    sidebarSub.addEventListener(
      "click",
      this.sidebarSubKeydownHandler.bind({ sidebar: this, sidebarSub })
    );
  };

  setSidebarSubsEvent() {
    this.sidebarSubs.forEach(this.sidebarSubEventHandler);
  }

  setSidebarDetailsEvent() {
    this.sidebarDetails.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  setCloseButtonEvent() {
    this.closeButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggle();
      this.detail.className = "detail";
    });
  }

  setBackButtonEvent() {
    this.backButton.addEventListener("click", () => {
      this.detail.className = "detail";
    });
  }

  setDetailsEvent() {
    this.details.addEventListener("click", () => {
      if (!this.details.open) {
        setTimeout(() => {
          this.detailsSub.style.opacity = "1";
        }, 1);
        return;
      }
      setTimeout(() => {
        this.detailsSub.style.opacity = "0";
      }, 1);
    });
  }

  interactiveElementKeydownHandler(e) {
    const { sidebar, elem, prevIndex, nextIndex } = this;
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        e.stopPropagation();
        if (elem.tagName === "DETAILS") {
          elem.open = false;
          setTimeout(() => {
            sidebar.detailsSub.style.opacity = "1";
            sidebar.interactiveElements[prevIndex].focus();
          }, 1);
          return;
        } else {
          sidebar.interactiveElements[prevIndex].focus();
          return;
        }
      case "ArrowDown":
        e.preventDefault();
        e.stopPropagation();
        if (elem.tagName === "DETAILS") {
          elem.open = true;
          setTimeout(() => {
            sidebar.detailsSub.style.opacity = "1";
            sidebar.interactiveElements[nextIndex].focus();
          }, 1);
          return;
        } else {
          sidebar.interactiveElements[nextIndex].focus();
          return;
        }
      case "Tab":
        e.preventDefault();
        e.stopPropagation();
        sidebar.closeButton.focus();

        const closeButtonKeyDownHandler = (e) => {
          e.preventDefault();
          if (e.shiftKey && e.key === "Tab") {
            elem.focus();
            sidebar.closeButton.removeEventListener(
              "keydown",
              closeButtonKeyDownHandler
            );
            return;
          }
          switch (e.key) {
            case "Tab":
            case "Enter":
              sidebar.toggle();
              sidebar.closeButton.removeEventListener(
                "keydown",
                closeButtonKeyDownHandler
              );
              return;
          }
        };

        sidebar.closeButton.addEventListener(
          "keydown",
          closeButtonKeyDownHandler
        );
    }
  }

  setInteractiveElements() {
    this.interactiveElements.forEach((elem, i) => {
      const prevIndex =
        (i - 1 + this.interactiveElements.length) %
        this.interactiveElements.length;
      const nextIndex = (i + 1) % this.interactiveElements.length;
      elem.addEventListener(
        "keydown",
        this.interactiveElementKeydownHandler.bind({
          sidebar: this,
          elem,
          prevIndex,
          nextIndex,
        })
      );
    });
  }

  setEvent() {
    this.aside = this.domNode.querySelector("ASIDE");
    this.sidebarSubs = this.domNode.querySelectorAll(".sidebar__sub");
    this.sidebarDetails = this.domNode.querySelector(".sidebar__details");
    this.closeButton = this.domNode.querySelector(".close");
    this.detail = this.domNode.querySelector(".detail");
    this.backButton = this.domNode.querySelector(".back");
    this.details = this.domNode.querySelector("details");
    this.detailsSub = this.details.querySelector(".sidebar__sub");
    this.interactiveElements = this.domNode.querySelectorAll(
      ".sidebar__sub [tabindex='-1']"
    );

    this.setThisEvent();
    this.setAsideEvent();
    this.setSidebarSubsEvent();
    this.setSidebarDetailsEvent();
    this.setCloseButtonEvent();
    this.setBackButtonEvent();
    this.setDetailsEvent();
    this.setInteractiveElements();
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

  toggle = () => {
    this.domNode.classList.toggle("active");
    if (this.domNode.className === "active") {
      this.domNode.querySelector('[tabindex="-1"]').focus();
      return;
    }
    findEvent("SidebarTriggerFocus")();
  };
}
