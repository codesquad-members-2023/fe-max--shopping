export const $ = (selector) => document.querySelector(selector);

export const $All = (selector) => document.querySelectorAll(selector);

export const showHiddenElement = (element) => element.classList.remove('hidden');

export const hideElement = (element) => {
  if (element.classList.contains('hidden')) return;
  element.classList.add('hidden');
};

export const openLayer = (...elements) => {
  closeAllLayers();
  openDimmedLayer();
  elements.forEach((element) => showHiddenElement(element));
}

export function openDimmedLayer() {
  showHiddenElement($('.dimmed-layer'));
}

export function closeAllLayers() {
  const layers = $All('.layer');
  for (const layer of layers) {
    hideElement(layer);
  }
}

export const removeHighlightFromElement = (element) => element.classList.remove('over');

export const highlightElement = (element) => {
  if (element.classList.contains('over')) return;
  element.classList.add('over');
};

export const createElement = (tagName, props) => {
  const el = document.createElement(tagName);
  for (const prop in props) {
    el.setAttribute(prop, props[prop]);
  }
  return el;
}
