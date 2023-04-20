import { initModalEvent } from "./modal-event/Modal-event.js";
import { addEventOnCarousel } from "./carousel/Carousel-event.js";
import { initSearchEvent } from "./search/init-search-event.js";
import { handleSidebarMenuClick } from "./sidebar/Handle-sidebar-click.js";

initModalEvent();
addEventOnCarousel();
initSearchEvent();
handleSidebarMenuClick();
