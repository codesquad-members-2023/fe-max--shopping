function setOpacity(element, percent) {
  element.style.opacity = percent;
}

function setSize(element, widthLen, heightLen) {
  element.style.width = widthLen;
  element.style.height = heightLen;
}

function setDisplay(element, state) {
  element.style.display = state;
}

function setZindex(element, zindex) {
  element.setAttribute("z-index", zindex);
}

export { setOpacity, setSize, setDisplay, setZindex };
