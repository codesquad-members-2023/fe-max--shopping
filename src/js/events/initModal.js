import { $ } from '../utils/dom.js';
import { delay } from '../utils/delay.js';
import { handleDimming, layerOpenState } from '../utils/dim.js';

const mainLogin = $('.main-login');
const mainShippingAddress = $('.main-shipping-address');

const setTime = 2000;
let isModalOn = false;

export async function initModal() {
  await delay(setTime);
  renderLoginModal();
  mainLogin.addEventListener('mouseenter', handleModal);
  mainLogin.addEventListener('mouseleave', removeModal);
  mainShippingAddress.addEventListener('mouseenter', handleModal);
  mainShippingAddress.addEventListener('mouseleave', removeModal);
}

function renderLoginModal() {
  const loginModalTemplate = `
  <div class="modal">
    <div class="modal-triangle"></div>
    <button type="button" class="button-common">로그인</button>
    <div>
      <span>기존 사용자가 아니십니까?</span>
      <span>여기에서 시작합니다.</span>
    </div>
  </div>`;
  mainLogin.insertAdjacentHTML('beforeend', loginModalTemplate);
}

function handleModal(e) {
  console.log(e.target);

  isModalOn = true;
  const loginModal = $('.modal', e.target);

  const expandedLoginModalTemplate = `
  <div class="line"></div>
  <div class="modal-text-layout">
    <dl>
      <dt>귀하의 목록</dt>
      <dd>목록 생성</dd>
      <dd>목록 또는 레지스트리 찾기</dd>
      <dd>AmazonSmile 자선 품목 목록</dd>
    </dl>
    <dl>
      <dt>계정</dt>
      <dd>계정</dd>
      <dd>주문</dd>
      <dd>권장 사항</dd>
      <dd>검색 기록</dd>
      <dd>워치리스트</dd>
      <dd>비디오 구매 및 대여</dd>
      <dd>Kindle 언리미티드</dd>
      <dd>콘텐츠 및 기기</dd>
      <dd>항목 구독 및 저장</dd>
      <dd>멤버십 및 구독</dd>
      <dd>음악 라이브러리</dd>
    </dl>
  </div>`;

  const shippingModalTemplate = `
  <div class="modal-temp1">
    <div class="modal-triangle"></div>
    <p>KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.</p>
    <div>
      <button type="button" class="button-common">계속</button>
      <button type="button" class="button-common">주소변경</button>
    </div>
  </div>`;

  if (e.target === mainLogin) {
    loginModal.insertAdjacentHTML('beforeend', expandedLoginModalTemplate);
    if (loginModal) {
      layerOpenState.modal = true;
      handleDimming();
    }
  }
  if (e.target === mainShippingAddress) {
    e.target.insertAdjacentHTML('beforeend', shippingModalTemplate);
    layerOpenState.modal = true;
    handleDimming();
  }
}

function removeModal(e) {
  layerOpenState.modal = false;
  handleDimming();

  if (e.target === mainLogin) {
    const loginModal = $('.modal', e.target);
    loginModal.remove();
  }
  if (e.target === mainShippingAddress) {
    const shippingModal = $('.modal-temp1', e.target);
    shippingModal.remove();
  }

}

