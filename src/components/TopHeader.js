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
          <div slot="tool-tip-content">
            <primary-button data-content="로그인" data-width="160px"></primary-button>
            <div class="blah">기존사용자가 아니십니까? <a href="#">여기에서 시작합니다.</a></div>
          </div>
        </tool-tip>
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
      parent.addEventListener("mouseover", (evt) => {
        const el = evt.target;
        const toolTip = parent.querySelector("tool-tip");
        if (!toolTip.contains(el)) toolTip.hideSelf();
      });
    });
  }
}

customElements.define("top-header", TopHeader);
