export const showElement = ($element: Element | null) => {
  $element?.classList.add("show");
};

export const hideElement = ($element: Element | null) => {
  $element?.classList.remove("show");
};

export const isShowElement = ($element: Element | null) => {
  return $element?.classList.contains("show");
};
