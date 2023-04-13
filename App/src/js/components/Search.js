import {
  addKeyword,
  delLogKeyword,
  getAccountRecipe,
  getAutocompleteKeywords,
  getLogKeywords,
  getRandomSearchKeywords,
  recipeToComponent,
} from "../utils.js";
import { Component } from "./Component.js";

function addLogKeywords(logKeywords) {
  const { input, keywords, keywordList, ul } = this;
  logKeywords.forEach((keyword, i) => {
    const keywordListLi = recipeToComponent(
      getAccountRecipe().keywordListItem(keyword)
    ).domNode;

    const keywordsLogItem = recipeToComponent(
      getAccountRecipe().keywordsLogItem({
        index: i + 1,
        textContent: keyword,
      })
    ).domNode;

    const button = keywordsLogItem.querySelector("button");

    button.addEventListener("click", () => {
      input.focus();
      input.value = button.textContent;
      keywords.className = "keywords";
    });

    const delInput = keywordsLogItem.querySelector(".delete");
    delInput.addEventListener("click", () => {
      delLogKeyword(i);
      keywords.className = "keywords";
    });

    keywordList.appendChild(keywordListLi);
    ul.appendChild(keywordsLogItem);
  });
}

function addRandomSearchKeywords() {
  const MAX_KEYWORD_COUNT = 10;
  const { input, keywords, keywordList, ul, logLen } = this;

  getRandomSearchKeywords(MAX_KEYWORD_COUNT - logLen).forEach((keyword, i) => {
    const keywordListLi = recipeToComponent(
      getAccountRecipe().keywordListItem(keyword)
    ).domNode;

    keywordList.appendChild(keywordListLi);

    const keywordsLi = recipeToComponent(
      getAccountRecipe().keywordsRecommendItem({
        index: logLen + i + 1,
        textContent: keyword,
      })
    ).domNode;

    ul.appendChild(keywordsLi);

    keywordsLi.addEventListener("click", (e) => {
      keywords.className = "keywords";
      input.focus();
      input.value = keyword;
    });
  });
}

function keywordFocusinHandler() {
  const { input, keywords, keywordList, ul } = this;

  input.value = "";
  keywords.className = "keywords active";

  keywordList.replaceChildren();
  ul.replaceChildren();

  const logKeywords = getLogKeywords();

  const logLen = logKeywords.length;

  addLogKeywords.bind(this)(logKeywords);
  addRandomSearchKeywords.bind({ ...this, logLen })();
}

function keywordToKeywordListItemChildren(input, keyword) {
  return keyword
    .replace(new RegExp(input.value, "g"), `<salt>${input.value}<salt>`)
    .split("<salt>")
    .filter((v) => v != "")
    .map((part) => {
      return {
        tagName: part === input.value ? "strong" : "span",
        textContent: part,
      };
    });
}

function keywordInputHandler() {
  const { input, keywords, keywordList, ul } = this;
  keywords.className = "keywords active";
  keywordList.replaceChildren();
  ul.replaceChildren();
  getAutocompleteKeywords(input.value).forEach((keyword, i) => {
    const keywordListLi = recipeToComponent(
      getAccountRecipe().keywordListItem(keyword)
    ).domNode;

    keywordList.appendChild(keywordListLi);

    const children = keywordToKeywordListItemChildren(input, keyword);

    const keywordsLi = recipeToComponent(
      getAccountRecipe().keywordsItem({
        index: i + 1,
        children,
      })
    ).domNode;
    const button = keywordsLi.querySelector("button")
    button.addEventListener("click", () => {
      input.focus();
      input.value = keyword;
      keywords.className = "keywords";
    })

    ul.appendChild(keywordsLi);
  });
}

export class Search extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }

  setEvent() {
    const keywordList = this.domNode.querySelector("#keyword-list");
    const keywords = this.domNode.querySelector("#keywords");

    const form = this.domNode.querySelector(".search__form");
    const input = this.domNode.querySelector("#keyword");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addKeyword(input.value);
      input.value = "";
      keywords.className = "keywords";
    });

    const ul = keywords.querySelector(".keywords__list");

    input.addEventListener(
      "focusin",
      keywordFocusinHandler.bind({ input, keywords, keywordList, ul })
    );

    keywords.addEventListener("mouseleave", () => {
      keywords.className = "keywords";
    });

    input.addEventListener(
      "input",
      keywordInputHandler.bind({ input, keywords, keywordList, ul })
    );
  }
}
