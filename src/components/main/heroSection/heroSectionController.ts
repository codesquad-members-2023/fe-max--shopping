import { $, $$ } from "../../../utils/domUtils";
import { ensureHTMLElement } from "../../../utils/typeCheckUtils";

export const handleMoveImage = (() => {
  const $imageContainer = ensureHTMLElement($(".hero-section__image-container"));
  const imageCount = $$(".hero-section__image").length;
  const isNegativeImageIndex = () => index < 0;
  const isExceededImageIndex = () => index > imageCount - 1;

  let index = 0;
  return async (direction: string) => {
    index += direction === "prev" ? -1 : 1;

    if (isNegativeImageIndex()) {
      index = imageCount - 2;

      await handleIndexUnderflow(imageCount, $imageContainer);
    }

    if (isExceededImageIndex()) {
      index = 1;

      await handleIndexOverflow($imageContainer);
    }

    moveImageList(index, $imageContainer);
  };
})();

const handleIndexUnderflow = async (imageCount: number, $imageContainer: HTMLElement) => {
  if ($imageContainer.firstElementChild == null) {
    throw new Error("The image container is empty.");
  }

  $imageContainer.insertAdjacentElement("beforeend", $imageContainer.firstElementChild);

  $imageContainer.style.transitionDuration = "";
  $imageContainer.style.transform = `translateX(-${imageCount - 1}00%)`;

  await delay(1);
};

const handleIndexOverflow = async ($imageContainer: HTMLElement) => {
  if ($imageContainer.lastElementChild == null) {
    throw new Error("The image container is empty.");
  }

  $imageContainer.insertAdjacentElement("afterbegin", $imageContainer.lastElementChild);

  $imageContainer.style.transitionDuration = "";
  $imageContainer.style.transform = `translateX(0%)`;

  await delay(1);
};

const moveImageList = (index: number, $imageContainer: HTMLElement) => {
  $imageContainer.style.transitionDuration = "500ms";
  $imageContainer.style.transform = `translateX(-${index * 100}%)`;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const setIntervalImageMove = () => {
  const id = setInterval(() => handleMoveImage("next"), 10000);

  intervalIdState.setIntervalId(id);
};

export const resetIntervalImageMove = () => {
  const intervalId = intervalIdState.getIntervalId();

  clearInterval(intervalId);
  setIntervalImageMove();
};

export const intervalIdState = {
  intervalId: 0,

  setIntervalId(id: number) {
    this.intervalId = id;
  },

  getIntervalId() {
    return this.intervalId;
  },
};
