export function KeywordsRecommendItemRecipe ({ index, textContent }) {
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
          class: "recommend",
          tabindex: "-1",
        },
        textContent,
      },
    ],
  };
};