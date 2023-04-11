import { Backdrop } from "../../Backdrop.js";
import { Base } from "../../Base.js";

export class SearchBarLayer extends Base {
  constructor() {
    super("div");
    this.recommendKeywords = [];
    this.keywordList = [];
    this.keywordNodes = [];
    this.maxIndex = null;
    this.init();
  }

  async init() {
    this.setAttribute("id", "SearchBarLayer");
    await this.getRecommend();
    this.setRecommendKeywords();
    this.keywordNodes = this.node.childNodes;
    this.clearSelectOption();
  }

  show() {
    this.setStyle("display", "flex");
    Backdrop.show();
  }

  hide() {
    this.setStyle("display", "none");
    Backdrop.hide();
    this.clearSelectOption();
  }

  setRecommendKeywords() {
    const keywords = this.recommendKeywords;
    const keywordTemplate = keywords
      .map((keywordObj, index) => {
        return `
            <div class="keywordList" data-index="${index}">
                <img src="./src/assets/arrow-top-right.svg">
                <span>${keywordObj.text}</span>
            </div>`;
      })
      .join();
    this.setTemplate(keywordTemplate);
  }

  clearSelectOption() {
    if (this.selectInedx) {
      this.keywordNodes[this.selectInedx].classList.remove("selected");
    }

    this.selectInedx = null;
    this.maxIndex = this.keywordNodes.length - 1;
    this.keywordList = this.recommendKeywords.map((e) => e.text);
  }

  async getRecommend() {
    const url = "http://localhost:3001/recommend";
    const res = await fetch(url);
    const keyowrds = await res.json();
    this.recommendKeywords = keyowrds;
  }
}
