import { MainBgSlideRecipe } from "./MainBgSlideRecipe.js";

export function MainBgWrapperRecipe({ mainBgSlides }) {
  return {
    tagName: "ul",
    attrs: {
      id: "background",
      class: "background__wrapper",
      "aria-hidden": "true",
    },
    children: mainBgSlides.map(MainBgSlideRecipe),
  };
}
