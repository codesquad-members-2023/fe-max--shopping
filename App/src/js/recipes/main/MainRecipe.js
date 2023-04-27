import { MainBgRecipe } from "./MainBgRecipe.js";
import { MainHeroRecipe } from "./MainHeroRecipe.js";
import { MainContentsRecipe } from "./MainContentsRecipe.js";

export function MainRecipe(state) {
  return {
    tagName: "main",
    attrs: {
      id: "main",
    },
    children: [
      {
        tagName: "h1",
        attrs: {
          class: "blind",
        },
        textContent: "메인",
      },
      {
        tagName: "div",
        attrs: {
          class: "dimmed",
        },
      },
      MainBgRecipe(state),
      {
        tagName: "div",
        attrs: {
          class: "inner",
        },
        children: [MainHeroRecipe(state), MainContentsRecipe(state)],
      },
    ],
  };
}

