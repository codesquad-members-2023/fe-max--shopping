import { FooterMenuItemRecipe } from "./FooterMenuItemRecipe.js";

export function FooterMenuRecipe({ title, items }) {
  return {
    tagName: "section",
    attrs: {
      class: "footer__menu",
      "aria-label": title,
    },
    children: [
      {
        tagName: "h2",
        textContent: title,
      },
      {
        tagName: "nav",
        children: [
          {
            tagName: "ul",
            attrs: {
              class: "footer__menu__list",
            },
            children: items.map(FooterMenuItemRecipe),
          },
        ],
      },
    ],
  };
}
