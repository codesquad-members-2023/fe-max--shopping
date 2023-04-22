import { Sidebar } from "./Sidebar.js";
import { RES_QUERY } from "../constant.js";

export class DetailSidebar extends Sidebar {
  constructor() {
    super();
  }

  setDetailTemplate() {
    this.db.getResponse(RES_QUERY.CAR).then((data) => {
      const template = `
        <div class="sidebar-back-to-menu">
          <img src="src/assets/svg/arrow-left.svg" alt="backToMenu" />
          주메뉴  
        </div>
        <h2 class="sidebar-title">${data.title}</h2>
        <ul class="sidebar-list">
          ${data.items.map((item) => `<li>${item.text}</li>`).join("")}
        </ul>
      `;
      this.template += template;
    });
  }

  addTemplate() {
    this.setBaseTemplate();
    this.setDetailTemplate();
  }
}
