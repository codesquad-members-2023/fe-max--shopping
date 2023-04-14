export function $(selector) {
    return document.querySelector(selector);
}
export function $All(selector) {
    return document.querySelectorAll(selector);
}
// export const $ = (selector) => document.querySelector(selector);
// export const $All = (selector) => document.querySelectorAll(selector);

export function addDimming(element) {
    element.classList.add("dim");
}

export function removeDimming(element) {
    element.classList.remove("dim");
}

export function showLayer(element) {
    element.classList.add("show");
}

export function hideLayer(element) {
    element.classList.remove("show");
}
