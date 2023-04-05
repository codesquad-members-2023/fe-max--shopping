import { DimLayer } from '../../element/DimLayer.js';
import { ShippingModal } from '../../element/Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Shipping extends Component {
  constructor() {
    super('shipping', 'A');
    this.shippingModalNode = new ShippingModal().node;
    this.dimLayer = new DimLayer();
    this.node.append(this.shippingModalNode);
  }

  initEventHandlers() {
    this.node.addEventListener('mouseenter', () => this.showShippingModal());
    this.node.addEventListener('mouseleave', () => this.closeShippingModal());
  }

  showShippingModal() {
    this.shippingModalNode.show();
    this.dimLayer.on();
  }

  closeShippingModal() {
    this.shippingModalNode.close();
    this.dimLayer.off();
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
