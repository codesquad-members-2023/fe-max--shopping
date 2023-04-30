import { Component } from '../../Core/Component.js';

export class NavbarMainView extends Component {
  getTemplate() {
    return `
    <nav class="nav-bar">
        <div class="nav-main">
            <a class="nav-main__BI" href="./index.html">
                <img src="./src/asset/images/BI.svg" alt="" />
            </a>
            <a class="nav-main__location" href="#">
                <div>
                    <img class="location-icon" src="./src/asset/icons/location.svg" alt="" />
                    <span class="title-small">배송처</span>
                </div>
                <div>
                    <span class="title-large">대한민국</span>
                </div>
            </a>
            <form class="nav-main__search" action="">
            </form>
            <a class="nav-main__lang" href="#">
                <span class="lang-flag">🇺🇸</span>
                <span class="title-large">KO</span>
            </a>
            <div class="nav-main__login" href="#">
                <div class="login-wrap">
                    <span class="title-small">안녕하세요, 로그인</span>
                    <span class="title-large">계정 및 목록</span>
                </div>
            </div>
            <a class="nav-main__order" href="#">
                <span class="title-small">반품</span>
                <span class="title-large">& 주문</span>
            </a>
            <a class="nav-main__cart" href="#">
                <img src="./src/asset/icons/cart.svg" alt="" />
                <span class="title-large">장바구니</span>
            </a>
        </div>
    </nav>`;
  }
}
