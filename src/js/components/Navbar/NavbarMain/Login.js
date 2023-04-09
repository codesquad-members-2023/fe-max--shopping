import { Main } from '../../../Main.js';
import { ExtendedLoginModal, LoginModal } from '../../element/Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Login extends Component {
  static delaySecond = 1;

  constructor() {
    super('login');
  }

  initEventHandlers() {
    this.showModalLater(Login.delaySecond);
    this.$('.login-area').addEventListener('mouseenter', () => this.showExtendedLoginModal());
    this.node.addEventListener('mouseleave', () => this.closeExtendedLoginModal());
  }

  showModalLater(sec) {
    setTimeout(() => this.showLoginModal(), sec * 1000);
  }

  showExtendedLoginModal() {
    this.closeLoginModal();

    const extendedLoginModal = this.$('.extended-login-modal');
    extendedLoginModal.show();

    Main.onDimmed();
  }

  closeExtendedLoginModal() {
    const extendedLoginModal = this.$('.extended-login-modal');
    extendedLoginModal.close();

    Main.offDimmed();
  }

  showLoginModal() {
    const loginModalNode = this.$('.login-modal');
    loginModalNode.show();
  }

  closeLoginModal() {
    const loginModalNode = this.$('.login-modal');
    loginModalNode.close();
  }

  getTemplate() {
    const loginArea = new LoginArea();
    const loginModal = new LoginModal();
    const extendedLoginModal = new ExtendedLoginModal();

    return [loginArea.node, loginModal.node, extendedLoginModal.node];
  }
}

class LoginArea extends Component {
  constructor() {
    super('login-area');
  }

  getTemplate() {
    return `
<span class="label-text">안녕하세요, 로그인</span>
<span class="main-text">계정 및 목록</span>
    `;
  }
}
