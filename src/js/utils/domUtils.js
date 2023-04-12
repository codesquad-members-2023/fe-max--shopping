export const $ = (selector) => document.querySelector(selector);

export const $All = (selector) => document.querySelectorAll(selector);

export const removeHiddenClass = (element) => element.classList.remove('hidden');

export const addHiddenClassIfAbsent = (element) => {
  if (element.classList.contains('hidden')) return;
  element.classList.add('hidden');
};
