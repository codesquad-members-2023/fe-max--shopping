import {
  addKeyword,
  checkKeyword,
  getAutoCompletedKeywords,
  getRandomKeywords,
} from "../util/apiFetcher.js";

import {
  getLogKeywords,
  delLogKeyword,
  getAccountRecipe,
  addLogKeyword,
} from "../util/factory.js";

import { recipeToComponent } from "../util/recipeToComponent.js";
import { Component } from "./Component.js";

export class Search extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }

  addRandomSearchKeywords = async (startIndex) => {
    const MAX_KEYWORD_COUNT = 10;
    const randomKeywords = await getRandomKeywords(
      MAX_KEYWORD_COUNT - startIndex
    );

    randomKeywords.forEach((keyword, i) => {
      const keywordListLi = recipeToComponent(
        getAccountRecipe().keywordListItem(keyword)
      ).domNode;

      this.keywordList.appendChild(keywordListLi);

      const keywordsLi = recipeToComponent(
        getAccountRecipe().keywordsRecommendItem({
          index: startIndex + i + 1,
          textContent: keyword,
        })
      ).domNode;

      this.ul.appendChild(keywordsLi);

      keywordsLi.addEventListener("click", (e) => {
        this.input.focus();
        this.input.value = keyword;
        this.keywords.className = "keywords";
      });
    });
  };

  addLogKeywords = (logKeywords) => {
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
        this.input.focus();
        this.input.value = button.textContent;
        this.keywords.className = "keywords";
      });

      const delInput = keywordsLogItem.querySelector(".delete");
      delInput.addEventListener("click", () => {
        delLogKeyword(i);
        this.keywords.className = "keywords";
      });

      this.keywordList.appendChild(keywordListLi);
      this.ul.appendChild(keywordsLogItem);
    });
  };

  keywordFocusinHandler = async () => {
    this.input.value = "";
    this.keywords.className = "keywords active";

    this.keywordList.replaceChildren();
    this.ul.replaceChildren();

    const logKeywords = getLogKeywords();
    const startIndex = logKeywords.length;

    this.addLogKeywords(logKeywords);
    await this.addRandomSearchKeywords(startIndex);

    this.keywordsItemsAddKeydownEvent(startIndex);
  };

  keywordsItemsAddKeydownEvent = async () => {
    const items = this.ul.querySelectorAll("li");
    const buttons = this.ul.querySelectorAll("button");

    const limit = buttons.length;

    buttons.forEach((button, i) => {
      button.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          this.keywords.className = "keywords";
          return;
        }
        e.preventDefault();
        switch (e.key) {
          case "ArrowUp":
            buttons[(i - 1 + limit) % limit].focus();
            return;
          case "ArrowDown":
            buttons[(i + 1) % limit].focus();
            return;
          case "D":
          case "d":
            const del = items[i].querySelector(".delete");
            if (del) {
              del.focus();
            }
            return;
          case "Enter":
            const temp = button.textContent;
            this.input.focus();
            this.input.value = temp;
            this.keywords.className = "keywords";
            return;
        }
      });
    });
  };

  keywordToKeywordListItemChildren(keyword) {
    return keyword
      .replace(
        new RegExp(this.input.value, "g"),
        `<salt>${this.input.value}<salt>`
      )
      .split("<salt>")
      .filter((v) => v != "")
      .map((part) => {
        return {
          tagName: part === this.input.value ? "strong" : "span",
          textContent: part,
        };
      });
  }

  keywordInputHandler = async () => {
    this.keywords.className = "keywords active";
    this.keywordList.replaceChildren();
    this.ul.replaceChildren();
    const autoCompletedKeywords = await getAutoCompletedKeywords(
      this.input.value
    );
    autoCompletedKeywords.forEach((keyword, i) => {
      const keywordListLi = recipeToComponent(
        getAccountRecipe().keywordListItem(keyword)
      ).domNode;

      this.keywordList.appendChild(keywordListLi);

      const children = this.keywordToKeywordListItemChildren(keyword);

      const keywordsLi = recipeToComponent(
        getAccountRecipe().keywordsItem({
          index: i + 1,
          children,
        })
      ).domNode;

      const button = keywordsLi.querySelector("button");
      button.addEventListener("click", () => {
        this.input.focus();
        this.input.value = keyword;
        this.keywords.className = "keywords";
      });

      this.ul.appendChild(keywordsLi);
    });
    this.keywordsItemsAddKeydownEvent();
  };

  setEvent() {
    this.keywordList = this.domNode.querySelector("#keyword-list");
    this.keywords = this.domNode.querySelector("#keywords");
    this.form = this.domNode.querySelector(".search__form");
    this.submitButton = this.form.querySelector('[type="submit"]');
    this.input = this.domNode.querySelector("#keyword");
    this.ul = this.keywords.querySelector(".keywords__list");

    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(this.form);
      const keyword = formData.get("keyword");
      if (keyword.trim() === "") {
        return;
      }
      const checkResult = await checkKeyword(keyword);
      addLogKeyword(keyword);
      if (!checkResult) {
        await addKeyword({ body: { keyword } });
      }
      this.input.value = "";
      this.keywords.className = "keywords";
    });

    this.input.addEventListener("focusin", this.keywordFocusinHandler);

    this.input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const button = this.ul.querySelector(".keywords__item button");
        if (button) button.focus();
      }

      if (e.key === "Tab") {
        this.keywords.className = "keywords";
      }
    });

    this.keywords.addEventListener("mouseleave", () => {
      this.keywords.className = "keywords";
    });

    this.input.addEventListener("input", this.keywordInputHandler);
  }
}
