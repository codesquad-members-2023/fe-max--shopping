import { hideElement, showElement } from "../../utils/elementVisibility";
import { BASE_URL } from "../../constants/BASE_URL";
import { fetchData } from "../../utils/fetchData";
import { $ } from "../../utils/domUtils";
import { SidebarMenu } from "./types";
import { SidebarView } from "./sidebarView";
import { dim, undim } from "../../utils/dimming";
import { Z_INDEX } from "../../constants/Z_INDEX";

export class SidebarController {
  private view: SidebarView;

  constructor(view: SidebarView) {
    this.view = view;
    this.view.render(this.fetchSidebarMenu());
    this.addEventListeners();
  }

  private fetchSidebarMenu(): Promise<SidebarMenu[]> {
    const url = new URL("sidebar_menu", BASE_URL);

    return fetchData(url);
  }

  private handleMenuItemClick({ target }: Event) {
    if (target == null || !(target instanceof Element)) {
      return;
    }

    const li = target.closest("li");

    if (li == null) {
      return;
    }

    const isMenuItemClick = li.classList.contains("sidebar__menu-item");

    if (isMenuItemClick && li.dataset.id != null) {
      const menuId = li.dataset.id;

      this.fetchMenuDetailData(menuId).then((data) => {
        this.view.renderDetailView(data);
        this.moveDetailView(this.view.$menuContainer);
      });
    }

    const isViewAllButtonClick = li.classList.contains("sidebar__view-all-button");
    const isHideButtonClick = li.classList.contains("sidebar__hide-button");

    if (isViewAllButtonClick) {
      const $hiddenMenuContainer = $(".sidebar__hidden-menu-container");
      showElement($hiddenMenuContainer);

      return;
    }

    if (isHideButtonClick) {
      const $hiddenMenuContainer = $(".sidebar__hidden-menu-container");
      hideElement($hiddenMenuContainer);

      return;
    }
  }

  private async fetchMenuDetailData(id: string) {
    return fetchData(`${BASE_URL}/sidebar_menu_details/${id}`);
  }

  private moveDetailView($menuContainer: Element) {
    $menuContainer.classList.add("detail-view");
  }

  private moveMenuView($menuContainer: Element) {
    $menuContainer.classList.remove("detail-view");
  }

  private openSidebar() {
    showElement(this.view.$sidebar);
    dim(Z_INDEX.SIDEBAR);
  }

  private closeSideBar() {
    hideElement(this.view.$sidebar);
    undim();
  }

  addEventListeners() {
    this.view.$sidebarButton.addEventListener("click", () => this.openSidebar());
    this.view.$closeButton.addEventListener("click", () => this.closeSideBar());
    this.view.$sidebarMenu.addEventListener("click", (event) => this.handleMenuItemClick(event));
    this.view.$menuDetailBack.addEventListener("click", () =>
      this.moveMenuView(this.view.$menuContainer)
    );
  }
}
