const $ = (selector, root = document) => root.querySelector(selector);
const $All = (selector, root = document) => root.querySelectorAll(selector);

export { $, $All };
