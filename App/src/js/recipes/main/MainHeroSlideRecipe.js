export function MainHeroSlideRecipe({ index, textContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "hero__slide",
      "data-index": index,
      style: `--index:${index};`,
    },
    children: [
      {
        tagName: "article",
        children: [
          {
            tagName: "h3",
            textContent,
          },
        ],
      },
    ],
  };
}
