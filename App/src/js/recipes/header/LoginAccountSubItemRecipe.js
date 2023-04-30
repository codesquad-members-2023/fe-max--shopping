export function LoginAccountSubItemRecipe ({ href, textContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "account__item",
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