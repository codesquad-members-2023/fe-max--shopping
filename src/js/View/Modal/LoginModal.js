import { $ } from '../../utils.js';
import { Component } from '../../Core/Component.js';

export class LoginModalView extends Component {
  getTemplate() {
    return `
        <dialog class="login-modal__small hidden">
            <button class="login-btn">로그인</button>
            <div>
                <span>기존 사용자가 아니십니까?</span>
                <a href="#">여기에서 시작합니다</a>
            </div>
        </dialog>`;
  }

  update(isOpen) {
    if (isOpen) {
      $('.login-modal__small').classList.add('active');
    } else {
      $('.login-modal__small').classList.remove('active');
    }
  }
}
