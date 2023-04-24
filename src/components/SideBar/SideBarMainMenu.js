import SideBarMenu from "./SideBarMenu.js";

class SideBarMainMenu extends SideBarMenu {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("menu-list-main", "visible");
    this.subMenus = [
      ...this.shadowRoot.host.parentElement.querySelectorAll(
        "side-bar-sub-menu"
      ),
    ];

    this.listContainer.addEventListener(
      "click",
      this.menuOptionClickHandler.bind(this)
    );
  }

  generateMenu(options) {
    const fragment = new DocumentFragment();

    options.forEach(({ sectionTitle, name, subcategories, id }) => {
      if (sectionTitle) {
        fragment.append(
          this.createSeparator(),
          this.createSectionTitle(sectionTitle)
        );
      } else {
        fragment.appendChild(
          this.createSectionItem({ name, subcategories, id })
        );
      }
    });

    this.listContainer.append(fragment);
  }

  menuOptionClickHandler(evt) {
    const clickedMenuItem = evt.target.closest(".menu-item");
    if (!clickedMenuItem) return;

    const targetSubMenuId = clickedMenuItem.dataset.menuId;
    if (!targetSubMenuId) {
      console.log("No submenu. Send user straight to page.");
      return;
    }

    const targetSubMenu = this.subMenus.filter(
      (subMenu) => subMenu.dataset.menuId === targetSubMenuId
    )[0];

    this.hideSelf();
    targetSubMenu.showSelf();
  }

  hideSelf() {
    this.classList.remove("visible");
    this.classList.add("translateX-left");
  }

  showSelf() {
    this.classList.add("visible");
    this.classList.remove("translateX-left");
  }
}

customElements.define("side-bar-main-menu", SideBarMainMenu);
