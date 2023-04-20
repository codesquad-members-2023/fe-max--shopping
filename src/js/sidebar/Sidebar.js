import { Db } from "../db/db.js";
import { querySelector } from "../query.js";

export class Sidebar {
  constructor() {
    this.sidebar = this.setSidebar();
    this.db = new Db();
  }

  setSidebar() {
    return querySelector.sidebar();
  }

  setBaseArea() {
    const template = `
      <div class="sidebar-login">
        <img src="/src/assets/svg/user.svg" alt="user" />
        안녕하세요, 로그인
      </div>
      <img class="sidebar-close" src="/src/assets/svg/sidebar-close.svg" alt="close" />
    `;
    this.sidebar.insertAdjacentHTML("beforeend", template);
  }

  resetSidebar() {
    this.sidebar.innerHTML = "";
  }
}
