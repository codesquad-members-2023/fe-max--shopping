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
  element.style.zIndex = zindex;
}

function setTransform(element, xMove, yMove) {
  element.style.transform = `translate(${xMove}, ${yMove})`;
}

export { setOpacity, setSize, setDisplay, setZindex, setTransform };
