import { $ } from "../../utils/domUtils";
import {
  handleMoveImage,
  resetIntervalImageMove,
  setIntervalImageMove,
} from "./heroSectionController";

export const initHeroSection = () => {
  addHeroSectionEventListeners();
  setIntervalImageMove();
};

const addHeroSectionEventListeners = () => {
  const $prevButton = $(".hero-section__prev-button");
  const $nextButton = $(".hero-section__next-button");

  $prevButton.addEventListener("click", () => {
    handleMoveImage("prev");
    resetIntervalImageMove();
  });
  $nextButton.addEventListener("click", () => {
    handleMoveImage("next");
    resetIntervalImageMove();
  });
};
