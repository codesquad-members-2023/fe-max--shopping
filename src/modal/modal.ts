export const mainDimmed = () => {
  const $dim = document.querySelector(".dim");

  if ($dim) {
    $dim.className = "dimmed";
  }

  return function undimmed() {
    if ($dim) {
      $dim.className = "dim";
    }
  };
};

export const handleModalMouseLeave = (
  event: Event,
  $parentNode: HTMLElement,
  undimmed: () => void
) => {
  const currentTarget = event.currentTarget as HTMLElement;

  const id = setTimeout(() => {
    setTimeout(() => currentTarget?.remove(), 500);
    currentTarget?.classList.add("fadeOut");
    $parentNode.classList.remove("open");
    undimmed();
  }, 500);

  currentTarget?.addEventListener("mouseover", () => clearTimeout(id), { once: true });
};
