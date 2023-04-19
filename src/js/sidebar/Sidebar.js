import { BASE_URL } from "../constant.js";
import { setZindex } from "../util/set-style.js";

class Sidebar {
  constructor(domElement) {
    this.domElement = domElement;
  }

  async fetchSidebarData() {
    return fetch(`${BASE_URL}/sidebar`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}

class EarlySidebar extends Sidebar {
  constructor() {
    super();
    this.update();
  }

  update() {
    this.fetchSidebarData().then((data) => {
      const template = `
        <div class="sidebar-login">
          <img src="/src/assets/svg/user.svg" alt="user" />
        ${data.login.title}
      </div>
      <img class="sidebar-close" src="/src/assets/svg/sidebar-close.svg" alt="close" />
      <h2 class="sidebar-title">${data.contentAndDevice.title}</h2>
      <ul class="sidebar-list">
        ${data.contentAndDevice.items
          .map(
            (item) =>
              `<li>${item.textContent}<img src="src/assets/svg/sidebar-right.svg" alt="right" /></li>`
          )
          .join("")}
      </ul>
      <h2 class="sidebar-title">${data.department.title}</h2>
      <ul class="sidebar-list">
        ${data.department.items
          .map(
            (item) =>
              `<li>${item.textContent}<img src="src/assets/svg/sidebar-right.svg" alt="right" /></li>`
          )
          .join("")}
      </ul>
      <div class="sidebar-unfold">
      ${data.unfold.textContent}<img src="src/assets/svg/chevron-down.svg" alt="unfold" /></div>
      `;
      document.querySelector(".menu-sidebar").insertAdjacentHTML("beforeend", template);
    });
  }
}

// template을 생성해놓고 어떤 요소를 클릭할 때마다 그것을 불러오게 한다면

export function test() {
  new EarlySidebar();

  const sideBar = document.querySelector(".menu-sidebar");
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.addEventListener("click", () => {
    setZindex(sideBar, 3);
  });

  menuContainer.addEventListener("click", (e) => {
    if (e.target && e.target.className == "sidebar-close") {
      setZindex(sideBar, -1);
    }
  });
}
