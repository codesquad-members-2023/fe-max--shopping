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

export class ElementStyler {
  constructor(domElement) {
    this.domElement = domElement;
  }
  setOpacity(percent) {
    this.domElement.style.opacity = percent;
  }
  setSize(widthLen, heightLen) {
    this.domElement.style.width = widthLen;
    element.style.height = heightLen;
  }
  setDisplay(state) {
    this.domElement.style.display = state;
  }
  setZindex(zindex) {
    this.domElement.style.zIndex = zindex;
  }
  setTransform(xMove, yMove) {
    this.style.transform = `translate(${xMove}, ${yMove})`;
  }
}

button.addEventListener("click", (event) => {
  const styler = new ElementStyler(event.target);
  styler.setDisplay("none");
});

export const button = document.querySelector("button");
export const buttonStyler = new ElementStyler(button);

function fromTemplate() {
  return document.createElement("button");
}

class ButtonComponent {
  constructor() {
    this.element = fromTemplate();
    this.styler = new ElementStyler(this.element);
  }
}
