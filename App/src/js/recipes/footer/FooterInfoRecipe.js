import { FooterInfoItemRecipe } from "./FooterInfoItemRecipe.js";

export function FooterInfoRecipe({ footerInfoItems }) {
  return {
    tagName: "div",
    attrs: {
      class: "footer__info",
    },
    children: [
      {
        tagName: "figure",
        attrs: {
          class: "footer__info__logo",
        },
        children: [
          {
            tagName: "img",
            attrs: {
              src: "./src/img/logo.svg",
              alt: "",
            },
          },
          {
            tagName: "figcaption",
            attrs: {
              class: "blind",
            },
            textContent: "아마존 로고",
          },
        ],
      },
      {
        tagName: "div",
        attrs: {
          class: "footer__info__inner",
        },
        children: [
          {
            tagName: "nav",
            children: [
              {
                tagName: "ul",
                attrs: {
                  class: "footer__info__list",
                },
                children: footerInfoItems.map(FooterInfoItemRecipe),
              },
            ],
          },
          {
            tagName: "address",
            attrs: {
              class: "footer__info__address",
            },
            textContent: "@ 1996-2023, Amazon.com, Inc. 또는 계열사",
          },
        ],
      },
    ],
  };
}
