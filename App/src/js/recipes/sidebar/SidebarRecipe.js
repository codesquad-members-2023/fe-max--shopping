import { SidebarDetailRecipe } from "./SidebarDetailRecipe.js";
import { SidebarSubRecipe } from "./SidebarSubRecipe.js";

export function SidebarRecipe({ sidebarSubs }) {
  return {
    tagName: "article",
    attrs: {
      id: "sidebar",
    },
    children: [
      {
        tagName: "h1",
        attrs: {
          class: "blind",
        },
        textContent: "사이드바 영역",
      },
      {
        tagName: "aside",
        children: [
          {
            tagName: "h2",
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
                      src: "./src/img/icon/user-white.svg",
                      alt: "손님",
                    },
                  },
                ],
              },
              {
                tagName: "span",
                textContent: "ㅤ안녕하세요 로그인",
              },
            ],
          },
          {
            tagName: "div",
            attrs: {
              class: "inner",
            },
            children: [
              ...sidebarSubs.map(SidebarSubRecipe),
              SidebarDetailRecipe({}),
            ],
          },
          {
            tagName: "input",
            attrs: {
              type: "image",
              src: "./src/img/icon/close.svg",
              class: "close",
              tabindex: -1,
            },
          },
        ],
      },
    ],
  };
}
