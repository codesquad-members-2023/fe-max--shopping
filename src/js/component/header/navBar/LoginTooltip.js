import { Backdrop } from "../../Backdrop.js";
import { Base } from "../../Base.js";
import { accountContentsList, myList } from "./tooltipList.js";

export class LoginTooltip extends Base {
  #_myList = myList;
  #_accountContentsList = accountContentsList;

  constructor(observer) {
    super("div");
    this.observer = observer;
    this.init();
  }

  init() {
    this.setAttribute("id", "login__tooltip");
    this.addChild();
    this.showLoginTooltip();
    this.observer.register(this);
  }

  showLoginTooltip() {
    setTimeout(() => {
      this.setAttribute("class", "show");
    }, 1000);
  }

  addChild() {
    const detailTemplate = `
      <div class="login__tooltip__detailBox" data-elementname="tooltipDetailBox">
        <div class="detailBox__myList">
          <div class="detailBox__title">귀하의 목록</div>
          <div class="myList__create detailBox__list">목록 생성</div>
          <div class="myList__find detailBox__list">
            목록 또는 레지스트리 찾기
          </div>
          <div class="myList__amazonSmile detailBox__list">
            AmazonSmile 자선 품목 목록
          </div>
        </div>
        <div class="detailBox__accountContentsList">
          <div class="detailBox__title">계정</div>
          <div class="contentsList detailBox__list">계정</div>
          <div class="contentsList detailBox__list">주문</div>
          <div class="contentsList detailBox__list">권장 사항</div>
          <div class="contentsList detailBox__list">검색 기록</div>
          <div class="contentsList detailBox__list">워치리스트</div>
          <div class="contentsList detailBox__list">비디오 구매 및 대여</div>
          <div class="contentsList detailBox__list">Kindle 언리미티드</div>
          <div class="contentsList detailBox__list">콘텐츠 및 기기</div>
          <div class="contentsList detailBox__list">항목 구독 및 저장</div>
          <div class="contentsList detailBox__list">멤버십 및 구독</div>
          <div class="contentsList detailBox__list">음악 라이브러리</div>
        </div>
      </div>`;

    const template = `
      <div class="login__tooltip__rectangle" data-elementname="rectangle"></div>
      <div class="login__tooltip__box" data-elementname="tooltipBox">
        <button class="box__btn">로그인</button>
        <div class="box__caption">
          <span class="box__text">기존 사용자가 아니십니까?</span>
          <a class="box__anchor">여기에서 시작합니다.</a>
          ${detailTemplate}
        </div>
      </div>
    `;

    this.setTemplate(template);
  }

  show() {
    this.setStyle("display", "block");
    Backdrop.show();

    this["tooltipDetailBox"].setStyle("display", "flex");
    this.setStyle("left", "-225px");
    this["rectangle"].setStyle("left", "250px");

    this["tooltipBox"].setChildren(this["tooltipDetailBox"]);
    this.observer.notify(this);
  }

  hide() {
    Backdrop.hide();
    this.setStyle("display", "none");
  }
}
