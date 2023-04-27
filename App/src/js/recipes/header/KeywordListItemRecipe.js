export function KeywordListItemRecipe (keyword) {
  return {
    tagName: "option",
    attrs: {
      value: keyword,
      disabled: true,
    },
    textContent: keyword,
  };
};