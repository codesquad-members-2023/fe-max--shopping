export function FooterMenuItemRecipe({ href, textContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "footer__menu__item",
    },
    children: [
      {
        tagName: "a",
        attrs: {
          href,
        },
        textContent,
      },
    ],
  };
}
