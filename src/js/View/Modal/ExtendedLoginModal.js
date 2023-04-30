import { $ } from '../../Utils.js';
import { Component } from '../../Core/Component.js';

export class ExtendedLoginModalView extends Component {
  getTemplate() {
    return `
        <dialog class="login-modal__large hidden">
            <div class="login-section">
                <button class="login-btn">로그인</button>
                <div>
                    <span>기존 사용자가 아니십니까?</span>
                    <a href="#">여기에서 시작합니다</a>
                </div>
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
  }

  update(isOpen) {
    if (isOpen) {
      $('.login-modal__small').classList.remove('active');
      $('.login-modal__large').classList.add('active');
    } else {
      $('.login-modal__large').classList.remove('active');
    }
  }
}
