import { MainContentsItemRecipe } from "./MainContentsItemRecipe.js";

export function MainContentsRecipe({ mainContentsItems }) {
  return {
    tagName: "section",
    attrs: {
      id: "contents",
    },
    children: [
      {
        tagName: "h2",
        attrs: {
          class: "blind",
        },
        textContent: "콘텐츠 영역",
      },
      {
        tagName: "ul",
        attrs: {
          class: "contents__list",
        },
        children: [
          {
            tagName: "li",
            attrs: {
              class: "contents__item",
            },
            children: [
              {
                tagName: "article",
                attrs: {
                  class: "contents__card",
                  "aria-label": "최상의 경험을 위해 로그인하세요",
                },
                children: [
                  {
                    tagName: "a",
                    attrs: {
                      href: "#",
                      class: "contents__login-link button button--lg",
                    },
                    textContent: "로그인",
                  },
                  {
                    tagName: "h3",
                    textContent: "최상의 경험을 위해 로그인하세요",
                  },
                ],
              },
            ],
          },
          ...mainContentsItems.map(MainContentsItemRecipe),
        ],
      },
    ],
  };
}
