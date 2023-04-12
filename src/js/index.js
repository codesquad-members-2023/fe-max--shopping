import { initModalEvent } from "./modal-event/init-modal-event.js";
import { initSlideEvent } from "./carousel/init-carousel-event.js";
import { initSearchEvent } from "./search/init-search-event.js";
import { newRecommend } from "./search/init-search-add-list.js";

initModalEvent();
initSlideEvent();
initSearchEvent();
newRecommend.appendListToChild();
