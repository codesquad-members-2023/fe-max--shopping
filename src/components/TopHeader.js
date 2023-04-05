import { fetchStyles } from "../utils/index.js";

const cssString = await fetchStyles("src/styles/components/TopHeader.css");

const template = document.createElement("template");
const style = document.createElement("style");

template.innerHTML = `
  <header>
    <nav class="nav-main">
      <a href="/" id="logo-container">
        <img src="src/assets/logo.png" alt="Amazon Logo" /></a>
      </a>
      <a href="#" id="shipping-container">
        <div>
          <img src="src/assets/icons/location.svg" alt="Shipping" />
          <span>배송처</span>
        </div>
        <span>대한민국</span>
      </a>
      <div id="search-container">
        <form>
          <input type="text" placeholder="검색 Amazon" />
          <button type="submit">
            <img src="src/assets/icons/search.svg" alt="Search"/>
          </button>
        </form>
      </div>
      <a href="#" id="lang-container">
        <span>🇰🇷</span>
        <span>KO</span>
      </a>
      <a href="#" class="tool-tip-parent" id="login-container">
        <span>안녕하세요, 로그인</span>
        <span>계정 및 목록</span>
      </a>
      <a href="#" id="orders-container">
        <span>반품</span>
        <span>& 주문</span>
      </a>
      <a href="#" id="cart-container">
        <img src="src/assets/icons/cart.svg" alt="Shopping Cart" />
        <span>장바구니</span>
      </a>
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
`;
style.textContent = cssString;

class TopHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true), style);
  }
}

customElements.define("top-header", TopHeader);
