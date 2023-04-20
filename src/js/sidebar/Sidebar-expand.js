import { EarlySidebar } from "./Sidebar-early.js";

export class ExpandEarlySidebar extends EarlySidebar {
  constructor() {
    super();
  }

  setMoreDepartment() {
    this.db.getMoreDepartment().then((data) => {
      const template = `
        <ul class="sidebar-list">
          ${data.items
            .map(
              (item) =>
                `<li>${item.text}<img src="src/assets/svg/sidebar-right.svg" alt="right" /></li>`
            )
            .join("")}
        </ul>
        <div class="sidebar-fold">
          간단히 보기
          <img src="src/assets/svg/chevron-up.svg" alt="fold" />
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
    this.setMoreDepartment();
  }
}
