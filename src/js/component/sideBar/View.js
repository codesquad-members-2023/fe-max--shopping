import { Backdrop } from "../Backdrop.js";
import { Base } from "../Base.js";

export class View extends Base {
  constructor() {
    super("aside");
    this.setAttribute("id", "sideBar");
    this.init();
  }

  init() {
    this.addChild();
  }

  addChild() {
    const template = `
        <div class="sideBar__header">
            <img class="sideBar__close" src="./src/assets/close.svg" data-elementname="closeBtn">
            <span>안녕하세요, 로그인</span>
        </div>
        <div class="sideBar__main" data-elementname="sideBarMain">
          <div class="sideBar__inner__wrapper" data-elementname="innerWrapper" >
          </div>
        </div>
    `;
    this.setTemplate(template);
  }

  render(data) {
    this.setStyle("display", "flex");
    this.setStyle("transform", "translateX(0%)");
    Backdrop.show();
  }

  close() {
    this.setStyle("display", "none");
    Backdrop.hide();
    this.innerWrapper.clearChild();
  }
}