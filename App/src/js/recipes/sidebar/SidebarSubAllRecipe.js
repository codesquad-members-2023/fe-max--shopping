import { SidebarSubItemRecipe } from "./SidebarSubItemRecipe.js";

export function SidebarSubAllRecipe(all) {
  return {
    tagName: "li",
    children: [
      {
        tagName: "details",
        attrs: {
          class: "sidebar__details",
          tabindex: "-1",
        },
        children: [
          {
            tagName: "summary",
            attrs: {
              class: "sidebar__item sidebar__item--summary",
            },
            children: [
              {
                tagName: "span",
                textContent: "모두보기ㅤ",
              },
              {
                tagName: "span",
                attrs: {
                  class: "icon",
                },
                children: [
                  {
                    tagName: "img",
                    attrs: {
                      src: "./src/img/icon/chevron-down.svg",
                      alt: "열기",
                    },
                  },
                ],
              },
            ],
          },
          {
            tagName: "ul",
            attrs: {
              class: "sidebar__sub",
              "data-category": 1,
            },
            children: all.map(SidebarSubItemRecipe),
          },
        ],
      },
    ],
  };
}