export function NavbarListItemRecipe ({ href, textContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "navbar__item",
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
};
