import { Main } from '../../../Main.js';
import { ShippingModal } from '../../element/Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Shipping extends Component {
  constructor() {
    super('shipping', 'A');
    this.shippingModal = new ShippingModal();
    this.node.append(this.shippingModal.node);
  }

  initEventHandlers() {
    this.node.addEventListener('mouseenter', () => this.showShippingModal());
    this.node.addEventListener('mouseleave', () => this.closeShippingModal());
  }

  showShippingModal() {
    this.shippingModal.node.show();
    Main.onDimmed();
  }

  closeShippingModal() {
    this.shippingModal.node.close();
    Main.offDimmed();
  }

  template() {
    return `
<div class="top">
  <img src="/src/assets/symbols/location.svg" alt="location icon" />
  <span class="label-text">배송처</span>
</div>
<span class="main-text">대한민국</span>
    `;
  }
}
