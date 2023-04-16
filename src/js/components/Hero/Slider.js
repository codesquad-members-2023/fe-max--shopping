import { Component } from '../base/Component.js';

export class Slider extends Component {
  constructor(slideCount) {
    super('slider', 'UL');
    this.slideCount = slideCount;
    this.init(this.node, this.slideCount);
  }

  init(node, slideCount) {
    this.setSliderWidth(node, slideCount);
    this.appendSlides(node, slideCount);
    this.renderSlideClone(node);
  }

  setSliderWidth(node, slideCount) {
    node.style.width = `${(slideCount + 2) * 100}vw`;
  }

  appendSlides(node, slideCount) {
    const slideNodes = this.makeSlideNodes(slideCount);
    node.append(...slideNodes);
  }

  makeSlideNodes(slideCount) {
    const imageNames = this.makeImageNames(slideCount);
    const slideNodes = imageNames.map((imageName) => new Slide(imageName).node);
    return slideNodes;
  }

  makeImageNames(slideCount) {
    return Array.from({ length: slideCount }).map((_, index) => `hero-${index + 1}.jpg`);
  }

  renderSlideClone(node) {
    const firstSlide = node.firstElementChild;
    const lastSlide = node.lastElementChild;
    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);

    node.prepend(lastClone);
    node.append(firstClone);
  }
}

class Slide extends Component {
  static __dirname = '/src/assets/images/banner/';

  constructor(imageName) {
    super('slide', 'LI');
    this.node.style.backgroundImage = `url(${Slide.__dirname}${imageName})`;
  }
}
