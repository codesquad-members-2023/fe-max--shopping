export function setOpacity(element, percent) {
  element.style.opacity = percent;
}

export function setSize(element, widthLen, heightLen) {
  element.style.width = widthLen;
  element.style.height = heightLen;
}

export function setDisplay(element, state) {
  element.style.display = state;
}

export function setZindex(element, zindex) {
  element.style.zIndex = zindex;
}

export function setTransform(element, xMove, yMove) {
  element.style.transform = `translate(${xMove}, ${yMove})`;
}
