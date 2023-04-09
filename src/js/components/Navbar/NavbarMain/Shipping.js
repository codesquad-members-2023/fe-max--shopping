import { Main } from '../../../Main.js';
import { ShippingModal } from '../../element/Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Shipping extends Component {
  constructor() {
    super('shipping', 'A');
  }

  initEventHandlers() {
    this.node.addEventListener('mouseenter', () => this.showShippingModal());
    this.node.addEventListener('mouseleave', () => this.closeShippingModal());
  }

  showShippingModal() {
    this.$('.shipping-modal').show();
    Main.onDimmed();
  }

  closeShippingModal() {
    this.$('.shipping-modal').close();
    Main.offDimmed();
  }

  getTemplate() {
    const shippingArea = new ShippingArea();
    const shippingModal = new ShippingModal();

    return [shippingArea.node, shippingModal.node];
  }
}

class ShippingArea extends Component {
  constructor() {
    super('shipping-area');
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
