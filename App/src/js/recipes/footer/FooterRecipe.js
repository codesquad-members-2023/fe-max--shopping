import { FooterInfoRecipe } from "./FooterInfoRecipe.js";
import { FooterMenuRecipe } from "./FooterMenuRecipe.js";

export function FooterRecipe(state) {
  const { footerMenus } = state;
  return {
    tagName: "footer",
    attrs: {
      id: "footer",
    },
    children: [
      {
        tagName: "h1",
        attrs: {
          class: "blind",
        },
        textContent: "푸터",
      },
      {
        tagName: "a",
        attrs: {
          href: "#banner",
          class: "scroll-top",
        },
        textContent: "위로 돌아가기",
      },
      {
        tagName: "div",
        attrs: {
          class: "footer__menu-container",
        },
        children: [...footerMenus.map(FooterMenuRecipe)],
      },
      FooterInfoRecipe(state),
    ],
  };
}







