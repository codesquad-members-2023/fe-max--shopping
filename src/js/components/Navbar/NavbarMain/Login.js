import { Main } from '../../../Main.js';
import { ExtendedLoginModal, LoginModal } from '../../common/Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Login extends Component {
  static delaySecond = 1;

  constructor() {
    super('login');
    this.main = new Main();
    this.loginArea = new LoginArea();
    this.loginModal = new LoginModal();
    this.extendedLoginModal = new ExtendedLoginModal();
    this.init();
  }

  initEventHandlers() {
    this.showModalLater(Login.delaySecond);
    this.loginArea.node.addEventListener('mouseenter', () => this.showExtendedLoginModal());
    this.node.addEventListener('mouseleave', () => this.closeExtendedLoginModal());
  }

  showModalLater(sec) {
    setTimeout(() => this.showLoginModal(), sec * 1000);
  }

  showExtendedLoginModal() {
    this.closeLoginModal();
    this.extendedLoginModal.show();
    this.main.onDimmed();
  }

  closeExtendedLoginModal() {
    this.extendedLoginModal.close();
    this.main.offDimmed();
  }

  showLoginModal() {
    this.loginModal.show();
  }

  closeLoginModal() {
    this.loginModal.close();
  }

  getTemplate() {
    return [this.loginArea.node, this.loginModal.node, this.extendedLoginModal.node];
  }
}

class LoginArea extends Component {
  constructor() {
    super('login-area');
    this.init();
  }

  getTemplate() {
    return `
<span class="label-text">안녕하세요, 로그인</span>
<span class="main-text">계정 및 목록</span>
    `;
  }
}
