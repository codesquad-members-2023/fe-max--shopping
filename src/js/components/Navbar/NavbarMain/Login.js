import { DimLayer } from '../../element/DimLayer.js';
import { ExtendedLoginModal, LoginModal } from '../../element/Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Login extends Component {
  constructor() {
    super('login');
    this.loginModalNode = new LoginModal().node;
    this.extendedLoginModalNode = new ExtendedLoginModal().node;
    this.dimLayer = new DimLayer();
    this.node.append(this.loginModalNode, this.extendedLoginModalNode);
  }

  initEventHandlers() {
    setTimeout(() => this.showLoginModal(), 1000);
    this.node.addEventListener('mouseenter', () => this.showExtendedLoginModal());
    this.node.addEventListener('mouseleave', () => this.closeExtendedLoginModal());
  }

  showExtendedLoginModal() {
    this.loginModalNode.close();
    this.extendedLoginModalNode.show();
    this.dimLayer.on();
  }

  closeExtendedLoginModal() {
    this.loginModalNode.close();
    this.extendedLoginModalNode.close();
    this.dimLayer.off();
  }

  showLoginModal() {
    this.loginModalNode.show();
  }

  template() {
    return `
<span class="label-text">안녕하세요, 로그인</span>
<span class="main-text">계정 및 목록</span>
    `;
  }
}
