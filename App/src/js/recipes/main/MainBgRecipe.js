import { MainBgWrapperRecipe } from "./MainBgWrapperRecipe.js";

export function MainBgRecipe(state) {
  return {
    tagName: "article",
    attrs: {
      id: "background",
    },
    children: [MainBgWrapperRecipe(state)],
  };
}
