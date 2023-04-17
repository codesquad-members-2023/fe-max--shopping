import { client } from '../../domain/client.js';
import { Component } from '../base/Component.js';

export class Slider extends Component {
  constructor(slideCount) {
    super('slider', 'UL');
    this.slideCount = slideCount;
    this.client = client;
    this.init();
  }

  async init() {
    this.setSliderWidth();
    await this.appendSlides();
    this.renderSlideClone();
  }

  setSliderWidth() {
    this.node.style.width = `${(this.slideCount + 2) * 100}vw`;
  }

  async appendSlides() {
    const imgSrc = await this.client.fetchHeroImages(this.slideCount);
    const slideNodes = imgSrc.map((src) => new Slide(src).node);
    this.node.append(...slideNodes);
  }

  renderSlideClone() {
    const firstSlide = this.node.firstElementChild;
    const lastSlide = this.node.lastElementChild;
    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);

    this.node.prepend(lastClone);
    this.node.append(firstClone);
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
