const $ = (selector) => document.querySelector(selector);

const $All = (selector) => document.querySelectorAll(selector);

const removeHiddenClass = (element) => element.classList.remove('hidden');

const addHiddenClassIfAbsent = (element) => {
  if (element.classList.contains('hidden')) return;
  element.classList.add('hidden');
};

export { $, $All, removeHiddenClass, addHiddenClassIfAbsent };
