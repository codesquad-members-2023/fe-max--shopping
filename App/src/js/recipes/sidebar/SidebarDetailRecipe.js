import { SidebarDetailItemRecipe } from "./SidebarDetailItemRecipe.js";

export function SidebarDetailRecipe({ name, items }) {
  return {
    tagName: "article",
    attrs: {
      class: "detail",
    },
    children: [
      {
        tagName: "h3",
        attrs: {
          class: "blind",
        },
        textContent: "카테고리 세부영역",
      },
      {
        tagName: "button",
        attrs: {
          class: "back",
          "aria-label": "주 메뉴로 돌아가기",
          tabindex: "-1",
        },
        children: [
          {
            tagName: "img",
            attrs: {
              src: "./src/img/icon/arrow-left.svg",
              alt: "왼쪽 화살표",
            },
          },
          {
            tagName: "span",
            textContent: "주 메뉴",
          },
        ],
      },
      {
        tagName: "article",
        attrs: {
          class: "inner",
        },
        children: [
          {
            tagName: "h4",
            textContent: name || "",
          },
          {
            tagName: "ul",
            children: items ? items.map(SidebarDetailItemRecipe) : [],
          },
        ],
      },
    ],
  };
}