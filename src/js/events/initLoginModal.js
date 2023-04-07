import { delay } from '../utils/delay.js';
import { $ } from '../utils/dom.js';

export function initLoginModal() {

  document.addEventListener('DOMContentLoaded', renderLoginModal);
  $('.main-login').addEventListener('mouseenter', expandLoginModal);
  $('.main-login').addEventListener('mouseleave', removeLoginModal);
}

async function renderLoginModal() {
  await delay(1000);
  const mainLogin = document.querySelector('.main-login');
  mainLogin.insertAdjacentHTML(
    'beforeend',
    `<div class="modal">
      <div class="modal-triangle"></div>
      <button type="button" class="button-common">로그인</button>
      <div>
          <span>기존 사용자가 아니십니까?</span>
          <span>여기에서 시작합니다.</span>
      </div>
  </div>`
  );
}

function expandLoginModal() {
  const loginModal = $('.modal');
  const bodyLayout = $('.body-layout');

  loginModal.insertAdjacentHTML(
    'beforeend',
    `<div class="line"></div>
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
      </div>`
  );

  bodyLayout.insertAdjacentHTML(
    'beforeend',
    `<div class="modal-bg">
    </div>`
  );
}

function removeLoginModal() {
  const loginModal = $('.modal');
  const modalBg =  $('.modal-bg');
  loginModal.remove();
  modalBg.remove();
}

// export { loginModal, renderLoginModal, expandLoginModal, removeLoginModal };
