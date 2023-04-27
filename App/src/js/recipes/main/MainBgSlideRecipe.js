export function MainBgSlideRecipe({ index, src }) {
  return {
    tagName: "li",
    attrs: {
      class: "background__slide slide",
      "data-index": index,
    },
    children: [
      {
        tagName: "img",
        attrs: {
          src,
          alt: "배경이미지",
        },
      },
    ],
  };
}
