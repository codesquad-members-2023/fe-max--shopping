import $ from '../utils/domSelector.js';

const modalController = () => {
  document.addEventListener('DOMContentLoaded', showSmallLoginModal);
  $('.main-login').addEventListener('mouseenter', showLargeLoginModal);
  $('.main-location').addEventListener('mouseenter', showLocationModal);
  $('.main-location').addEventListener('mouseleave', removeModal);
};

const showSmallLoginModal = () => {
  setTimeout(renderSmallLoginModal, 1000);
};

const renderSmallLoginModal = () => {
  const smallLoginModalTemplate = `
  <dialog open class="login-modal__small">
  <button class="login-btn">로그인</button>
  <div>
    <span>기존 사용자가 아니십니까?</span>
    <a href="#">여기에서 시작합니다</a>
  </div>
</dialog>`;
  $('.main-login').insertAdjacentHTML('afterbegin', smallLoginModalTemplate);
};

const showLargeLoginModal = () => {
  if ($('.login-modal__small') !== null) removeModalHTML('login-modal__small');
  renderLargeLoginModel();
};

const renderLargeLoginModel = () => {
  const largeLoginModalTemplate = `
  <dialog open class="login-modal__large">
  <div class="login-section">
    <button class="login-btn">로그인</button>
    <div>
      <span>기존 사용자가 아니십니까?</span>
      <a href="#">여기에서 시작합니다</a>
    </section>
  </div>
  <div class="account-section">
    <ul class="section-title">
      <span>귀하의 목록</span>
      <li><a>목록 생성</a></li>
      <li><a>목록 또는 레지스트리 찾기</a></li>
      <li><a>AmazonSmile 자선 품목 목록</a></li>
    </ul>
    <ul class="section-title">
      <span>계정</span>
      <li><a>계정</a></li>
      <li><a>주문</a></li>
      <li><a>권장 사항</a></li>
      <li><a>검색 기록</a></li>
      <li><a>워치리스트</a></li>
      <li><a>비디오 구매 및 대여</a></li>
      <li><a>Kindle 언리미티드</a></li>
      <li><a>콘텐츠 및 기기</a></li>
      <li><a>항목 구독 및 저장</a></li>
      <li><a>멤버십 및 구독</a></li>
      <li><a>음악 라이브러리</a></li>
    </ul>
  </div>
</dialog>`;
  $('.main-login').insertAdjacentHTML('afterbegin', largeLoginModalTemplate);
};

const showLocationModal = () => {
  if ($('.location-modal') === null) {
    renderLocationModal();
    renderDimmed();
    removeHiddenOfModal('location-modal', 'dim');
  }
};

const renderLocationModal = () => {
  const locationModalTemplate = `
  <dialog open class="location-modal hidden">
    <p>KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.</p>
    <div>
      <button class="continue-btn">계속</button>
      <button class="changeAddress-btn">주소변경</button>
    </div>
  </dialog>`;
  $('.main-location').insertAdjacentHTML('afterbegin', locationModalTemplate);
};

const renderDimmed = () => {
  const dimmedTemplate = `
  <div class="dim hidden"></div>`;
  $('.main').insertAdjacentHTML('afterbegin', dimmedTemplate);
};

const removeHiddenOfModal = (modal, dim) => {
  $(`.${modal}`).classList.remove('hidden');
  $(`.${dim}`).classList.remove('hidden');
};

const removeModal = () => {
  addHiddenOfModal('location-modal', 'dim');
  setTimeout(() => removeModalHTML('location-modal', 'dim'), 500);
};

const addHiddenOfModal = (modal, dim) => {
  $(`.${modal}`).classList.add('hidden');
  $(`.${dim}`).classList.add('hidden');
};

const removeModalHTML = (modal, dim) => {
  $(`.${modal}`).remove();
  $(`.${dim}`).remove();
};
export default modalController;
