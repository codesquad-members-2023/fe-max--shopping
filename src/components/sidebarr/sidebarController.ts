import { hideElement, showElement } from "../../utils/elementVisibility";
import { BASE_URL } from "../../constants/BASE_URL";
import { fetchData } from "../../utils/fetchData";
import { $ } from "../../utils/domUtils";
import { SidebarMenu } from "./types";
import { SidebarView } from "./sidebarView";

export class SidebarController {
  private view: SidebarView;

  constructor(view: SidebarView) {
    this.view = view;

    this.view.bindSidebarMenuClickHandler(this.handleMenuItemClick.bind(this));
    this.view.bindMenuDetailBackClickHandler(this.moveMenuView.bind(this));
    this.view.render(this.fetchSidebarMenu());
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
        this.renderDetailView(data);
        this.moveDetailView();
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

  private renderDetailView(data: SidebarMenu) {
    const $menuDetailContainer = $(".sidebar__menu-detail-container");
    const component = this.view.createMenuComponent(data);

    $menuDetailContainer.innerHTML = component;
  }

  private moveDetailView() {
    const $menuContainer = $(".sidebar__menu-container");

    $menuContainer.classList.add("detail-view");
  }

  private moveMenuView() {
    const $menuContainer = $(".sidebar__menu-container");

    $menuContainer.classList.remove("detail-view");
  }
}
