import { Component } from '../../Core/Component.js';

export class NavbarSubView extends Component {
  getTemplate() {
    return `
    <div class="nav-sub">
        <section class="nav-sub__category">
            <div class="menu-category">
                <img src="./src/asset/icons/menu.svg" alt="" />
                <span>모두</span>
            </div>
            <ul class="sub-link">
              <li><a href="#">오늘의 딜</a></li>
              <li><a href="#">고객 서비스</a></li>
              <li><a href="#">레지스트리</a></li>
              <li><a href="#">기프트 카드</a></li>
              <li><a href="#">판매</a></li>
            </ul>
        </section>
        <div class="nav-sub__event">
            <a href="#">지금 특가 상품 쇼핑하기</a>
        </div>
    </div>`;
  }
}
