import { Base } from "../../Base.js";
import { cardList } from "./cardList.js";

export class Contents extends Base {
  constructor() {
    super("div");
    this.cardList = cardList;
    this.init();
  }

  init() {
    this.setAttribute("id", "contents");
    this.addChild();
  }

  addChild() {
    const cards = this.setCards();

    const template = `
      <div class="cardColumn">
        <div class="cardWrapper contents__loginWrapper">
          <button class="loginBtn">로그인</button>
          <div class="cardTitle">최상의 경험을 위해 로그인하세요</div>
        </div>
        ${cards[0]}
      </div>
      <div class="cardColumn">
        ${cards[1]}
      </div>
      <div class="cardColumn">
        ${cards[2]}
      </div>
      <div class="cardColumn">
        ${cards[3]}
      </div>
    `;

    this.setTemplate(template);
  }

  setCards() {
    const cards = this.cardList.map((list) => {
      return list
        .map((item) => {
          return `
          <div class="cardWrapper">
            <img class="cardImg" src=${item.img}>
            <div class="cardContet">
              <div class="cardTitle">${item.title}</div>
              <div class="cardText">${item.text}</div>
            </div>
          </div>`;
        })
        .join();
    });

    return cards;
  }
}
