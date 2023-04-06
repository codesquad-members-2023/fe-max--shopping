const template = document.createElement("template");
template.innerHTML = `
  <header>
    <nav class="nav-main">
      <a href="/" id="logo-container">
        <img src="src/assets/logo.png" alt="Amazon Logo" /></a>
      </a>
      <div class="nav-main__item-container">
        <a href="#" id="shipping-link">
          <div>
            <img src="src/assets/icons/location.svg" alt="Shipping" />
            <span>배송처</span>
          </div>
          <span>대한민국</span>
        </a>
      </div>
      <div id="search-container">
        <form>
          <input type="text" placeholder="검색 Amazon" />
          <button type="submit">
            <img src="src/assets/icons/search.svg" alt="Search"/>
          </button>
        </form>
      </div>
      <div class="nav-main__item-container">
        <a href="#" id="lang-link">
          <span>🇰🇷</span>
          <span>KO</span>
        </a>
      </div>
      <div class="nav-main__item-container tool-tip-parent">
        <a href="#" id="login-link">
          <span>안녕하세요, 로그인</span>
          <span>계정 및 목록</span>
        </a>

        <tool-tip>
          <div slot="tool-tip-top-content">
            <primary-button data-content="로그인" data-width="160px"></primary-button>
            <div>기존사용자가 아니십니까? <a href="#">여기에서 시작합니다.</a></div>
          </div>
        </tool-tip>
        <tool-tip-enhanced>
          <div slot="tool-tip-top-content">
            <primary-button data-content="로그인" data-width="160px"></primary-button>
            <div>기존사용자가 아니십니까? <a href="#">여기에서 시작합니다.</a></div>
          </div>
          <div slot="tool-tip-bottom-content" class="tool-tip-bottom-content">
            <div class="tool-top-bottom-content__column">
              <h4 class="column__title">귀하의 목록</h4>
              <ul class="column__list">
                <li><a href="#">목록 생성</a></li>
                <li><a href="#">목록 또는 레지스트리 찾기</a></li>
                <li><a href="#">AmazonSmile 자선 품목 목록</a></li>
              </ul>
            </div>
            <div class="tool-top-bottom-content__column">
              <h4 class="column__title">계정</h4>
              <ul class="column__list">
                <li><a href="#">계정</a></li>
                <li><a href="#">주문</a></li>
                <li><a href="#">권장 사항</a></li>
                <li><a href="#">검색 기록</a></li>
                <li><a href="#">워치리스트</a></li>
                <li><a href="#">비디오 구매 및 대여</a></li>
                <li><a href="#">Kindle 언리미티드</a></li>
                <li><a href="#">콘텐츠 및 기기</a></li>
                <li><a href="#">항목 구독 및 저장</a></li>
                <li><a href="#">멤버십 및 구독</a></li>
                <li><a href="#">음악 라이브러리</a></li>
              </ul>
            </div>
          </div>
        </tool-tip-enhanced>
      </div>
      <div class="nav-main__item-container">
        <a href="#" id="orders-link">
          <span>반품</span>
          <span>& 주문</span>
        </a>
      </div>
      <div class="nav-main__item-container">
        <a href="#" id="cart-link">
          <img src="src/assets/icons/cart.svg" alt="Shopping Cart" />
          <span>장바구니</span>
        </a>
      </div>
    </nav>

    <nav class="nav-sub">
      <ul>
        <li>
          <a href="#">
            <img src="src/assets/icons/menu.svg" alt="Burger Button" />
            <span>모두</span>
          </a>
        </li>
        <li><a href="#">오늘의 딜</a></li>
        <li><a href="#">고객 서비스</a></li>
        <li><a href="#">레지스트리</a></li>
        <li><a href="#">기프트 카드</a></li>
        <li><a href="#">판매</a></li>
      </ul>
      <a href="#">지금 특가 상품 쇼핑하기</a>
    </nav>
  </header>

  <link rel="stylesheet" href="src/styles/components/TopHeader.css"></link>

  <style>
    /* tool-tip-enhanced component styles */
    .tool-tip-bottom-content {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid #eff2f2;
    }

    .tool-top-bottom-content__column {
      width: 150px;
      color: #10141a;
    }

    .tool-top-bottom-content__column * {
      color: #10141a;
    }

    .column__title {
      margin-bottom: 4px;
      font: 13px Pretendard-ExtraBold;
      letter-spacing: -0.06em;
    }

    .column__list {
      font: 11px/160% Pretendard-Medium;
      letter-spacing: -0.03em;
    }

    .column__list li {
      margin-bottom: 4px;
    }
  </style>
`;

class TopHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const toolTipParents = this.shadowRoot.querySelectorAll(".tool-tip-parent");
    toolTipParents.forEach((parent) => {
      const toolTip = parent.querySelector("tool-tip");
      const toolTipEnhanced = parent.querySelector("tool-tip-enhanced");

      parent.addEventListener("mouseover", (evt) => {
        const el = evt.target;

        if (!toolTip.contains(el)) {
          toolTip.hideSelf();
          toolTipEnhanced.showSelf();
        }
      });

      parent.addEventListener("mouseout", () => {
        toolTipEnhanced.hideSelf();
      });
    });
  }
}

customElements.define("top-header", TopHeader);
