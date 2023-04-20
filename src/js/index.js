import { initModalEvent } from "./modal-event/init-modal-event.js";
import { initSlideEvent } from "./carousel/init-carousel-event.js";
import { initSearchEvent } from "./search/init-search-event.js";
import { newRecommend, newRecent } from "./search/init-search-add-list.js";
import { handleSidebarMenuClick } from "./sidebar/Handle-sidebar-click.js";

initModalEvent();
initSlideEvent();
initSearchEvent();
handleSidebarMenuClick();
