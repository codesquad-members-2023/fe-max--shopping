import ComponentWithBackDrop from "../common/ComponentWithBackDrop.js";
import { BASE_URL } from "../../api/index.js";

const template = document.createElement("template");
template.innerHTML = `
  <div class="sidebar-container">
    <a class="signin-link" href="#">
      <img src="src/assets/icons/user.svg" />
      <b>안녕하세요, 로그인</b>
    </a>

    <div class="menu-container"></div>
  </div>

  <button class="close-btn" type="button">
    <img src="src/assets/icons/close.svg" alt="Close Side Bar" />
  </button>

  <link rel="stylesheet" href="src/styles/components/SideBar/SideBar.css"></link>
`;

class SideBar extends ComponentWithBackDrop {
  constructor() {
    super(template);
    this.menuContainer = this.shadowRoot.querySelector(".menu-container");
    this.closeBtn = this.shadowRoot.querySelector(".close-btn");

    this.registerCustomEvent("showSelf", {
      detail: { position: "ENTIRE" },
    });
    this.backDrop.registerListenable(this);
  }

  async connectedCallback() {
    const menuData = await this.fetchMenuData();
    const parsedMenuData = this.parseMenuData(menuData);
    this.generateMenus(parsedMenuData);

    this.closeBtn.addEventListener("click", () => {
      this.dispatchCustomEvent("hideSelf");
    });
  }

  async fetchMenuData() {
    const res = await fetch(`${BASE_URL}/side-bar`);
    return await res.json();
  }

  parseMenuData(menuData) {
    const mainMenuOptions = menuData
      .map(({ sectionTitle, categories }) => {
        return [{ sectionTitle }, ...categories];
      })
      .flat()
      .map((item, idx) => {
        return { ...item, id: idx };
      });

    const subMenuContents = mainMenuOptions.filter((category) => {
      return category.subcategories;
    });

    return { mainMenuOptions, subMenuContents };
  }

  generateMenus({ mainMenuOptions, subMenuContents }) {
    const mainMenu = document.createElement("side-bar-main-menu");
    mainMenu.setContents(JSON.stringify(mainMenuOptions));
    const subMenus = this.generateSubMenus(subMenuContents);

    this.menuContainer.append(mainMenu, subMenus);
  }

  generateSubMenus(subMenusContents) {
    const fragment = new DocumentFragment();

    subMenusContents.forEach((subMenuContent) => {
      const subMenu = document.createElement("side-bar-sub-menu");
      subMenu.setContents(JSON.stringify(subMenuContent));
      fragment.appendChild(subMenu);
    });

    return fragment;
  }
}

customElements.define("side-bar", SideBar);
