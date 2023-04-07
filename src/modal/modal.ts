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
