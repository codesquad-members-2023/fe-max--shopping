export function KeywordsRecipe () {
  return {
    tagName: "article",
    attrs: {
      id: "keywords",
      class: "keywords",
    },
    children: [
      {
        tagName: "h3",
        attrs: {
          class: "blind",
        },
        textContent: "검색어들",
      },
      {
        tagName: "ul",
        attrs: {
          class: "keywords__list",
        },
      },
    ],
  };
};