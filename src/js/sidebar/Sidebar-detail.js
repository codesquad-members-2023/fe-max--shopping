import { Sidebar } from "./Sidebar.js";

export class DetailSidebar extends Sidebar {
  constructor() {
    super();
  }

  setDetailContent() {
    this.db.getCarSupplies().then((data) => {
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
      this.sidebar.insertAdjacentHTML("beforeend", template);
    });
  }

  addSidebarContent() {
    this.resetSidebar();
    this.setBaseArea();
    this.setDetailContent();
  }
}
