import { hideElement, isShowElement, showElement } from "../utils/elementVisibility";

export const mainDimmed = () => {
  const $dim = document.querySelector(".dim");

  $dim?.classList.add("dimmed");

  return function undimmed() {
    $dim?.classList.remove("dimmed");
  };
};

export const handleNavBarMouseEnter = ($modal: Element | null) => {
  if (isShowElement($modal)) {
    return;
  }

  showElement($modal);

  const undimmed = mainDimmed();

  $modal?.addEventListener("mouseleave", (event: Event) => handleModalMouseLeave(event, undimmed));
};

export const handleModalMouseLeave = (event: Event, undimmed: () => void) => {
  const $modal = event.currentTarget as HTMLElement;

  const id = setTimeout(() => {
    hideElement($modal);
    undimmed();
  }, 500);

  $modal?.addEventListener("mouseenter", () => clearTimeout(id), { once: true });
};
