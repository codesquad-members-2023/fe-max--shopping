import Component from "./common/Component.js";

const template = document.createElement("template");
template.innerHTML = `
  <footer>
    <div class="back-to-top">
      <a id="back-to-top-link" href="#">위로 돌아가기</a>
    </div>
    <div class="columns-container">
      <section class="column">
        <h4>당사에 대해 알아보기</h4>
        <ul>
          <li><a href="#">커리어</a></li>
          <li><a href="#">블로그</a></li>
          <li><a href="#">Amazon 소개</a></li>
          <li><a href="#">투자자 관계</a></li>
          <li><a href="#">Amazon 디바이스</a></li>
          <li><a href="#">아마존 사이언스</a></li>
        </ul>
      </section>
      <section class="column">
        <h4>당사와 함께 돈 벌기</h4>
        <ul>
          <li><a href="#">Amazon에서 판매</a></li>
          <li><a href="#">Amazon Business에서 판매</a></li>
          <li><a href="#">Amazon에서 앱 판매</a></li>
          <li><a href="#">게열사 되기</a></li>
          <li><a href="#">제품 광고</a></li>
          <li><a href="#">Amazon에 자체 게시</a></li>
          <li><a href="#">Amazon 허브 호스팅</a></li>
          <li><a href="#">당사와 함께 돈 벌기에 대해 자세히 보기</a></li>
        </ul>
      </section>
      <section class="column">
        <h4>Amazon 결제 제품</h4>
        <ul>
          <li><a href="#">포인트로 구입</a></li>
          <li><a href="#">잔고 재로드</a></li>
          <li><a href="#">Amazon 환율 변환기</a></li>
        </ul>
      </section>
      <section class="column">
        <h4>지원</h4>
        <ul>
          <li><a href="#">COVID-19 및 Amazon</a></li>
          <li><a href="#">사용자 계정</a></li>
          <li><a href="#">내 주문</a></li>
          <li><a href="#">배송 요금 및 정책</a></li>
          <li><a href="#">반품 및 교환</a></li>
          <li><a href="#">콘텐츠 및 디바이스 관리</a></li>
          <li><a href="#">Amazon Assistant</a></li>
          <li><a href="#">도움말</a></li>
        </ul>
      </section>
    </div>
    <div class="copyright-container">
      <a href="/">
        <img src="src/assets/logo.png" alt="Amazon Logo" /></a>
      </a>
      <div class="copyright-info">
        <ul>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">개인정보취급 고지</a></li>
          <li><a href="#">광고 개인정보보호 선택 항목</a></li>
        </ul>
        <small>© 1996-2023, Amazon.com, Inc. 또는 계열사</small>
      </div>
    </div>
  </footer>

  <link rel="stylesheet" href="src/styles/components/MainFooter.css">
`;

class MainFooter extends Component {
  constructor() {
    super(template);
  }
}

customElements.define("main-footer", MainFooter);
