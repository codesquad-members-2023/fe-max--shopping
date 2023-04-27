import { KeywordListRecipe } from "./KeywordListRecipe.js";
import { KeywordsRecipe } from "./KeywordsRecipe.js";

export function SearchRecipe() {
  return {
    tagName: "section",
    attrs: {
      id: "search",
      class: "group search",
    },
    children: [
      {
        tagName: "h2",
        attrs: {
          class: "blind",
        },
        textContent: "검색",
      },
      {
        tagName: "form",
        attrs: {
          class: "search__form",
        },
        children: [
          {
            tagName: "fieldset",
            attrs: {
              class: "search__keyword-field",
            },
            children: [
              {
                tagName: "input",
                attrs: {
                  list: "keyword-list",
                  type: "text",
                  id: "keyword",
                  name: "keyword",
                  placeholder: "검색 Amazon",
                  autocomplete: "off",
                },
              },
              KeywordListRecipe(),
            ],
          },
          {
            tagName: "button",
            attrs: {
              type: "submit",
            },
            children: [
              {
                tagName: "span",
                attrs: {
                  class: "icon",
                },
                children: [
                  {
                    tagName: "img",
                    attrs: {
                      src: "./src/img/icon/search.svg",
                      alt: "검색",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      KeywordsRecipe(),
    ],
  };
};