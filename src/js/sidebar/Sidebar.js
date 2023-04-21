import { Db } from "../db/db.js";
import { querySelector } from "../query.js";

export class Sidebar {
  constructor() {
    this.sidebar = this.setSidebar();
    this.db = new Db();
    this.template = "";
  }

  setSidebar() {
    return querySelector.sidebar();
  }

  setBaseTemplate() {
    const template = `
      <div class="base-area">
        <div class="sidebar-login">
        <img src="/src/assets/svg/user.svg" alt="user" />
        안녕하세요, 로그인
        <img class="sidebar-close" src="/src/assets/svg/sidebar-close.svg" alt="close" /></div>
      </div>
    `;
    this.template += template;
  }

  renderTemplate() {
    this.sidebar.innerHTML = this.template;
  }

  resetSidebar() {
    this.sidebar.innerHTML = "";
  }
}
