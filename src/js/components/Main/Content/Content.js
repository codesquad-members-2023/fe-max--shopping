import { Component } from '../../base/Component.js';
import { contentModel } from './ContentModel.js';

export class Content extends Component {
  constructor() {
    super('main-content');
    this.loginCard = new LoginCard();
    this.model = contentModel;
    this.contentCardNodes = [];
    this.load();
  }

  async load() {
    await this.model.requestContentInfos();
    const contentInfos = this.model.getContentInfos();
    this.contentCardNodes = contentInfos.map((info) => new Card(info).node);
    this.render();
  }

  getTemplate() {
    return [this.loginCard.node, ...this.contentCardNodes];
  }
}

class LoginCard extends Component {
  constructor() {
    super('login-card');
    this.init();
  }

  getTemplate() {
    return `
<button class="login-btn">로그인</button>
<span>최상의 경험을 위해 로그인하세요</span>
`;
  }
}

class Card extends Component {
  constructor(info) {
    super('content-card');
    this.init(info);
  }

  getTemplate(info) {
    const { title, link, src, alt } = info;

    return `
<img src="${src}" alt="${alt}" />
<div class="content-card__detail">
  <h3>${title}</h3>
  <a href="#"><span>${link}</span></a>
</div>
    `;
  }
}
