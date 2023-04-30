import { NavbarListItemRecipe } from "./NavbarListItemRecipe.js";

export function NavbarRecipe ({ navbarItems }) {
  return {
    tagName: "div",
    attrs: {
      id: "navbar",
    },
    children: [
      {
        tagName: "nav",
        attrs: {
          class: "left",
        },
        children: [
          {
            tagName: "ul",
            attrs: {
              class: "navbar__list",
            },
            children: [
              {
                tagName: "li",
                attrs: {
                  class: "navbar__item",
                },
                children: [
                  {
                    tagName: "button",
                    attrs: {
                      id: "sidebar-trigger",
                      class: "sidebar-trigger",
                    },
                    children: [
                      {
                        tagName: "img",
                        attrs: {
                          src: "./src/img/icon/menu-white.svg",
                          alt: "사이드바 열기",
                        },
                      },
                      {
                        tagName: "span",
                        textContent: "모두",
                      },
                    ],
                  },
                ],
              },
              ...navbarItems.map(NavbarListItemRecipe),
            ],
          },
        ],
      },
      {
        tagName: "a",
        attrs: {
          href: "#",
          class: "right",
        },
        textContent: "지금 특가 상품 쇼핑하기",
      },
    ],
  };
};




