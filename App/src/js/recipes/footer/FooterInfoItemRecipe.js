export function FooterInfoItemRecipe({ href, textContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "footer__info__item",
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
