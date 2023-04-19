import { ShippingModal } from './Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Shipping extends Component {
  constructor(main) {
    super('shipping', 'A');
    this.main = main;
    this.shippingArea = new ShippingArea();
    this.shippingModal = new ShippingModal();
    this.init();
  }

  initEventHandlers() {
    this.node.addEventListener('mouseenter', () => this.showShippingModal());
    this.node.addEventListener('mouseleave', () => this.closeShippingModal());
  }

  showShippingModal() {
    this.shippingModal.show();
    this.main.onDimmed();
  }

  closeShippingModal() {
    this.shippingModal.close();
    this.main.offDimmed();
  }

  getTemplate() {
    return [this.shippingArea.node, this.shippingModal.node];
  }
}

class ShippingArea extends Component {
  constructor() {
    super('shipping-area', 'A');
    this.node.setAttribute('href', '#');
    this.init();
  }

  getTemplate() {
    return `
<div class="top">
  <img src="/src/assets/symbols/location.svg" alt="location icon" />
  <span class="label-text">배송처</span>
</div>
<span class="main-text">대한민국</span>
    `;
  }
}
