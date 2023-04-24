import Component from "../common/Component.js";

const template = document.createElement("template");
template.innerHTML = `
  <ul class="list-container"></ul>

  <link rel="stylesheet" href="src/styles/components/SideBar/SideBarMenu.css"></link>
`;

export default class SideBarMenu extends Component {
  constructor() {
    super(template);
    this.listContainer = this.shadowRoot.querySelector(".list-container");
  }

  setContents(newVal) {
    this.dataset.contents = newVal;
  }

  static get observedAttributes() {
    return ["data-contents"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "data-contents") {
      this.generateMenu(JSON.parse(newVal));
    }
  }

  createSectionTitle(title) {
    const li = document.createElement("li");
    li.classList.add("menu-title");
    li.textContent = title;
    return li;
  }

  createSectionItem({ name, subcategories, id }) {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    const itemName = document.createElement("span");

    itemName.textContent = name;
    aTag.appendChild(itemName);
    if (subcategories) {
      const img = document.createElement("img");
      img.src = "src/assets/icons/chevron-right.svg";
      img.alt = "";
      aTag.appendChild(img);
    }

    if (id) {
      li.dataset.menuId = id;
    }
    li.classList.add("menu-item");
    li.appendChild(aTag);

    return li;
  }

  createSeparator() {
    const li = document.createElement("li");
    li.classList.add("menu-separator");
    return li;
  }
}
