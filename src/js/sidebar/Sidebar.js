import { BASE_URL } from "../constant.js";
import { setZindex } from "../util/set-style.js";
import { Db } from "../db/db.js";

class Sidebar {
  constructor() {
    this.sidebar = this.setSidebar();
  }

  setSidebar() {
    return document.querySelector(".menu-sidebar");
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

class EarlySidebar extends Sidebar {
  constructor() {
    super();
    this.db = new Db();
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

  initSidebar() {
    this.resetSidebar();
    this.setBaseArea();
    this.setContentAndDevice();
    this.setShopByDepartment();
  }
}

export function test() {
  const sidebarEle = document.querySelector(".menu-sidebar");
  const menuContainer = document.querySelector(".menu-container");

  menuContainer.addEventListener("click", () => {
    const earlySidebar = new EarlySidebar(sidebarEle);
    earlySidebar.initSidebar();
    setZindex(sidebarEle, 3);
  });

  menuContainer.addEventListener("click", (e) => {
    if (e.target && e.target.className == "sidebar-close") {
      setZindex(sidebarEle, -1);
    }
  });
}
