const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const addDimming = (element) => {
    element.classList.add("dim");
};

const removeDimming = (element) => {
    element.classList.remove("dim");
};

const showLayer = (element) => {
    element.classList.add("show");
};

const hideLayer = (element) => {
    element.classList.remove("show");
};

export { $, $All, addDimming, removeDimming, showLayer, hideLayer };
