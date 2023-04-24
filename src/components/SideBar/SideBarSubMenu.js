import SideBarMenu from "./SideBarMenu.js";

class SideBarSubMenu extends SideBarMenu {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("menu-list-sub", "translateX-right");
    this.mainMenu =
      this.shadowRoot.host.parentElement.querySelector(".menu-list-main");

    this.listContainer.addEventListener(
      "click",
      this.menuOptionClickHandler.bind(this)
    );
  }

  generateMenu({ name, subcategories, id }) {
    const subMenuOptions = new DocumentFragment();
    subcategories.forEach((item) => {
      subMenuOptions.appendChild(this.createSectionItem(item));
    });

    this.dataset.menuId = id;

    this.listContainer.append(
      this.createGoBackOption("주메뉴"),
      this.createSeparator(),
      this.createSectionTitle(name),
      subMenuOptions,
      this.createSeparator()
    );
  }

  createGoBackOption(target) {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    const img = document.createElement("img");
    const span = document.createElement("span");

    img.src = "src/assets/icons/arrow-left.svg";
    img.alt = "";
    span.textContent = target;
    li.classList.add("menu-item", "go-back");

    aTag.append(img, span);
    li.append(aTag);

    return li;
  }

  menuOptionClickHandler(evt) {
    if (evt.target.closest(".go-back")) {
      this.hideSelf();
      this.mainMenu.showSelf();
    }
  }

  hideSelf() {
    this.classList.remove("visible");
    this.classList.add("translateX-right");
  }

  showSelf() {
    this.classList.add("visible");
    this.classList.remove("translateX-right");
  }
}

customElements.define("side-bar-sub-menu", SideBarSubMenu);
