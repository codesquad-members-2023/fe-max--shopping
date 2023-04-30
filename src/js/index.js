import { initModalEvent } from "./modal-event/index.js";
import { addEventOnCarousel } from "./carousel/index.js";
import { handleSidebarMenuClick } from "./sidebar/Handle-sidebar-click.js";
import { initKeyword } from "./keyword/index.js";
import { searchBarEventHandler } from "./search/Search-event.js";

initModalEvent();
addEventOnCarousel();
handleSidebarMenuClick();
initKeyword();
searchBarEventHandler();
