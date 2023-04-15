export const showElement = ($element: Element) => {
  $element.classList.add("show");
};

export const hideElement = ($element: Element) => {
  $element.classList.remove("show");
};

export const hasClassShow = ($element: Element) => {
  return $element.classList.contains("show");
};
