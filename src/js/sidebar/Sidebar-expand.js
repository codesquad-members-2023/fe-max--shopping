import { EarlySidebar } from "./Sidebar-early.js";
import { RES_QUERY } from "../constant.js";

export class ExpandEarlySidebar extends EarlySidebar {
  constructor() {
    super();
  }

  setMoreTemplate() {
    this.db.getResponse(RES_QUERY.EXPAND).then((data) => {
      const template = `
        <ul class="sidebar-list">
          ${data.items
            .map(
              (item) =>
                `<li id="${item.id}">${item.text}<img src="src/assets/svg/sidebar-right.svg" alt="right" /></li>`
            )
            .join("")}
        </ul>
        <div class="sidebar-fold">
          간단히 보기
          <img src="src/assets/svg/chevron-up.svg" alt="fold" />
        </div>
      `;
      this.template += template;
    });
  }

  addTemplate() {
    this.setBaseTemplate();
    this.setEarlyTemplate();
    this.setMoreTemplate();
  }
}
