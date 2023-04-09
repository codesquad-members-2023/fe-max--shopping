import { $$ } from "../../utils/domUtils";

export const handleImageMove = (() => {
  const imageCount = $$(".hero-section__image").length;
  let index = 0;

  return async (direction: string, $imageContainer: HTMLElement) => {
    index += direction === "prev" ? -1 : 1;

    if (index < 0) {
      index = imageCount - 2;

      if ($imageContainer.firstElementChild == null) {
        throw new Error(`The image container(${$imageContainer}) is empty`);
      }

      $imageContainer.style.transitionDuration = "";
      $imageContainer.insertAdjacentElement("beforeend", $imageContainer.firstElementChild);
      $imageContainer.style.transform = `translateX(-${imageCount - 1}00%)`;
      await delay(1);

      $imageContainer.style.transitionDuration = "500ms";
      $imageContainer.style.transform = `translateX(-${index * 100}%)`;

      return;
    }

    if (index > imageCount - 1) {
      index = 1;

      if ($imageContainer.lastElementChild == null) {
        throw new Error(`The image container(${$imageContainer}) is empty`);
      }

      $imageContainer.style.transitionDuration = "";
      $imageContainer.insertAdjacentElement("afterbegin", $imageContainer.lastElementChild);
      $imageContainer.style.transform = `translateX(0%)`;
      await delay(1);

      $imageContainer.style.transitionDuration = "500ms";
      $imageContainer.style.transform = `translateX(-${index * 100}%)`;

      return;
    }

    $imageContainer.style.transform = `translateX(-${index * 100}%)`;
    $imageContainer.style.transitionDuration = "500ms";
  };
})();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
