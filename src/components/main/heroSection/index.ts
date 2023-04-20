import { $ } from "../../../utils/domUtils";
import { renderHeroSection } from "./heroSectionView";
import {
  createMoveImageHandler,
  moveImageHandler,
  resetIntervalImageMove,
  setIntervalImageMove,
} from "./heroSectionController";

export const initHeroSection = () => {
  renderHeroSection().then(() => {
    const moveImageHandler = createMoveImageHandler();

    addHeroSectionEventListeners(moveImageHandler);
    setIntervalImageMove(moveImageHandler);
  });
};

const addHeroSectionEventListeners = (moveImageHandler: moveImageHandler) => {
  const $prevButton = $(".hero-section__prev-button");
  const $nextButton = $(".hero-section__next-button");

  $prevButton.addEventListener("click", () => {
    moveImageHandler("prev");
    resetIntervalImageMove(moveImageHandler);
  });
  $nextButton.addEventListener("click", () => {
    moveImageHandler("next");
    resetIntervalImageMove(moveImageHandler);
  });
};
