import { Component } from '../base/Component.js';

export class Slider extends Component {
  constructor() {
    super('slider', 'UL');
  }

  getTemplate(imgSrc) {
    const last = imgSrc[imgSrc.length - 1];
    const first = imgSrc[0];
    const slideNodes = [last, ...imgSrc, first].map((src) => new Slide(src).node);
    return slideNodes;
  }

  initStyle(slideCount, startIndex) {
    this.node.style.width = `${(slideCount + 2) * 100}vw`;
    this.node.style.transform = `translateX(-${startIndex * 100}vw)`;
  }

  moveToSlide(slideIndex, withTransition = true) {
    this.node.style.transform = `translateX(-${slideIndex * 100}vw)`;
    this.node.style.transition = withTransition ? `transform 0.5s ease-in-out` : 'none';
  }
}

class Slide extends Component {
  constructor(src) {
    super('slide', 'LI');
    this.init(src);
  }

  getTemplate(src) {
    return `
<img class="slide-image" src="${src}" alt=""></img>
    `;
  }
}
