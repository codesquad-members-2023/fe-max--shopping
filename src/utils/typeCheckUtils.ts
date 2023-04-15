export const ensureHTMLElement = ($element: Element) => {
  if ($element instanceof HTMLElement) {
    return $element;
  }

  throw new Error(
    `Provided element(${$element}) is not HTMLElement type. Please ensure you are passing an HTMLElement.`
  );
};
