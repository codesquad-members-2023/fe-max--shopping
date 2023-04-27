export function KeywordsItemRecipe ({ index, children }) {
  return {
    tagName: "li",
    attrs: {
      class: "keywords__item",
      "data-index": index,
      style: `--y: ${index}`,
    },
    children: [
      {
        tagName: "button",
        attrs: {
          tabindex: "-1",
        },
        children,
      },
    ],
  };
};