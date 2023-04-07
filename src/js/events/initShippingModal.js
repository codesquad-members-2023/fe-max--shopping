import { $ } from '../utils/dom.js';

export function initShippingModal() {
  $('.main-shipping-address').addEventListener(
    'mouseenter',
    renderShippingModal
  );
  $('.main-shipping-address').addEventListener(
    'mouseleave',
    removeShippingModal
  );
}

function renderShippingModal() {
  const mainShippingAddress = $('.main-shipping-address');
  const bodyLayout = $('.body-layout');

  mainShippingAddress.insertAdjacentHTML(
    'beforeend',
    `<div class="modal-temp1">
    <div class="modal-triangle"></div>
    <p>KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.</p>
    <div>
        <button type="button" class="button-common">계속</button>
        <button type="button" class="button-common">주소변경</button>
    </div>
</div>`
  );

  bodyLayout.insertAdjacentHTML(
    'afterend',
    `<div class="modal-bg">
  </div>`
  );
}

function removeShippingModal() {
  const shippingModal = $('.modal-temp1');
  const modalBg = $('.modal-bg');

  shippingModal.remove();
  modalBg.remove();
}
