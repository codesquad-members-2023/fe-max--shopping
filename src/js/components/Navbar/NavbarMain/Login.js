import { Main } from '../../../Main.js';
import { ExtendedLoginModal, LoginModal } from '../../element/Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Login extends Component {
  constructor() {
    super('login');
    this.loginModal = new LoginModal();
    this.extendedLoginModal = new ExtendedLoginModal();
    this.node.append(this.loginModal.node, this.extendedLoginModal.node);
  }

  initEventHandlers() {
    setTimeout(() => this.showLoginModal(), 1000);
    this.node.addEventListener('mouseenter', () => this.showExtendedLoginModal());
    this.node.addEventListener('mouseleave', () => this.closeExtendedLoginModal());
  }

  showExtendedLoginModal() {
    this.loginModal.node.close();
    this.extendedLoginModal.node.show();
    Main.onDimmed();
  }

  closeExtendedLoginModal() {
    this.extendedLoginModal.node.close();
    Main.offDimmed();
  }

  showLoginModal() {
    this.loginModal.node.show();
  }

  template() {
    return `
<span class="label-text">안녕하세요, 로그인</span>
<span class="main-text">계정 및 목록</span>
    `;
  }
}
