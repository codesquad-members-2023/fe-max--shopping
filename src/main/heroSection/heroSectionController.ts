import { $$ } from "../../utils/domUtils";

export const handleImageMove = (() => {
  let index = 0;
  const imageCount = $$(".hero-section__image").length;
  const isNegativeImageIndex = () => index < 0;
  const isExceededImageIndex = () => index > imageCount - 1;

  return async (direction: string, $imageContainer: HTMLElement) => {
    index += direction === "prev" ? -1 : 1;

    if (isNegativeImageIndex()) {
      index = imageCount - 2;

      handleNegativeIndex(index, imageCount, $imageContainer);

      return;
    }

    if (isExceededImageIndex()) {
      index = 1;

      handleExceededImageIndex(index, $imageContainer);

      return;
    }

    $imageContainer.style.transform = `translateX(-${index * 100}%)`;
    $imageContainer.style.transitionDuration = "500ms";
  };
})();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const handleNegativeIndex = async (
  index: number,
  imageCount: number,
  $imageContainer: HTMLElement
) => {
  if ($imageContainer.firstElementChild == null) {
    throw new Error(`The image container(${$imageContainer}) is empty`);
  }

  $imageContainer.style.transitionDuration = "";
  $imageContainer.insertAdjacentElement("beforeend", $imageContainer.firstElementChild);
  $imageContainer.style.transform = `translateX(-${imageCount - 1}00%)`;
  await delay(1);

  $imageContainer.style.transitionDuration = "500ms";
  $imageContainer.style.transform = `translateX(-${index * 100}%)`;
};

const handleExceededImageIndex = async (index: number, $imageContainer: HTMLElement) => {
  if ($imageContainer.lastElementChild == null) {
    throw new Error(`The image container(${$imageContainer}) is empty`);
  }

  $imageContainer.style.transitionDuration = "";
  $imageContainer.insertAdjacentElement("afterbegin", $imageContainer.lastElementChild);
  $imageContainer.style.transform = `translateX(0%)`;
  await delay(1);

  $imageContainer.style.transitionDuration = "500ms";
  $imageContainer.style.transform = `translateX(-${index * 100}%)`;
};
