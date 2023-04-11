const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

export { $, $All };

export const addDimming = (className) => {
    const elem = $(className);
    elem.classList.add("dim");
};

export const removeDimming = (className) => {
    const elem = $(className);
    elem.classList.remove("dim");
};
