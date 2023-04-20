import { Sidebar } from "./Sidebar.js";

export class EarlySidebar extends Sidebar {
  constructor() {
    super();
  }

  setContentAndDevice() {
    this.db.getContentAndDevice().then((data) => {
      const template = `
        <h2 class="sidebar-title">${data.title}</h2>
        <ul class="sidebar-list">
          ${data.items
            .map(
              (item) =>
                `<li>${item.text}<img src="src/assets/svg/sidebar-right.svg" alt="right" /></li>`
            )
            .join("")}
        </ul>
      `;
      this.sidebar.insertAdjacentHTML("beforeend", template);
    });
  }

  setShopByDepartment() {
    this.db.getShopByDepartment().then((data) => {
      const template = `
        <h2 class="sidebar-title">${data.title}</h2>
        <ul class="sidebar-list">
          ${data.items
            .map(
              (item) =>
                `<li>${item.text}<img src="src/assets/svg/sidebar-right.svg" alt="right" /></li>`
            )
            .join("")}
        </ul>
        <div class="sidebar-unfold">
          모두 보기
          <img src="src/assets/svg/chevron-down.svg" alt="unfold" />
        </div>
      `;
      this.sidebar.insertAdjacentHTML("beforeend", template);
    });
  }

  addSidebarContent() {
    this.resetSidebar();
    this.setBaseArea();
    this.setContentAndDevice();
    this.setShopByDepartment();
  }
}
