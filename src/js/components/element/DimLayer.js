import { Component } from '/src/js/components/base/Component.js';

export class DimLayer extends Component {
  static #instance;

  constructor() {
    if (DimLayer.#instance) {
      return DimLayer.#instance;
    }

    super('dim-layer display-none');
    DimLayer.#instance = this;
  }

  on() {
    this.node.classList.remove('display-none');
  }

  off() {
    this.node.classList.add('display-none');
  }
}
