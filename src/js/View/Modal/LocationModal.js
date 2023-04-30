import { $ } from '../../Utils.js';
import { Component } from '../../Core/Component.js';

export class LocationModalView extends Component {
  getTemplate() {
    return `
      <dialog class="location-modal hidden">
        <p>KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.</p>
        <div>
          <button class="continue-btn">계속</button>
          <button class="changeAddress-btn">주소변경</button>
        </div>
      </dialog>`;
  }

  update(isOpen) {
    if (isOpen) {
      $('.location-modal').classList.add('active');
    } else {
      $('.location-modal').classList.remove('active');
    }
  }
}
