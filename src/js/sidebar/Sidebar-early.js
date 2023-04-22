import { Sidebar } from "./Sidebar.js";
import { RES_QUERY } from "../constant.js";

export class EarlySidebar extends Sidebar {
  constructor() {
    super();
  }

  setEarlyTemplate() {
    this.db.getResponse(RES_QUERY.EARLY).then((data) => {
      const template = `
        <h2 class="sidebar-title">${data.contentAndDevice.title}</h2>
        <ul class="sidebar-list">
          ${data.contentAndDevice.items
            .map(
              (item) =>
                `<li>${item.text}<img src="src/assets/svg/sidebar-right.svg" alt="right" /></li>`
            )
            .join("")}
        </ul>

        <h2 class="sidebar-title">${data.shopByDepartment.title}</h2>
        <ul class="sidebar-list">
          ${data.shopByDepartment.items
            .map(
              (item) =>
                `<li id="${item.id}">${item.text}<img src="src/assets/svg/sidebar-right.svg" alt="right" /></li>`
            )
            .join("")}
        </ul>
        <div class="sidebar-unfold">
          모두 보기
          <img src="src/assets/svg/chevron-down.svg" alt="unfold" />
        </div>
      `;
      this.template += template;
    });
  }

  addTemplate() {
    this.setBaseTemplate();
    this.setEarlyTemplate();
  }
}
