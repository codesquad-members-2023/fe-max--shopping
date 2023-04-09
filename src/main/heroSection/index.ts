import { $ } from "../../utils/domUtils";
import { ensureHTMLElement } from "../../utils/typeCheckUtils";
import { handleImageMove } from "./heroSectionController";

export const addHeroSectionEventListeners = () => {
  const $prevButton = $(".hero-section__prev-button");
  const $nextButton = $(".hero-section__next-button");
  const $imageContainer = ensureHTMLElement($(".hero-section__image-container"));

  $prevButton.addEventListener("click", () => handleImageMove("prev", $imageContainer));
  $nextButton.addEventListener("click", () => handleImageMove("next", $imageContainer));
};
