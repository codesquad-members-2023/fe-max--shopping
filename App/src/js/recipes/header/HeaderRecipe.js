import { CartRecipe } from "./CartRecipe.js";
import { LoginRecipe } from "./LoginRecipe.js";
import { LogoRecipe } from "./LogoRecipe.js";
import { MyPageRecipe } from "./MyPageRecipe.js";
import { NationRecipe } from "./NationRecipe.js";
import { NavbarRecipe } from "./NavbarRecipe.js";
import { SearchRecipe } from "./SearchRecipe.js";
import { ShippingAddressRecipe } from "./ShippingAddressRecipe.js";

export function HeaderRecipe (state) {
  return {
    tagName: "header",
    attrs: {
      id: "banner",
    },
    children: [
      {
        tagName: "div",
        attrs: {
          class: "inner",
        },
        children: [
          LogoRecipe(),
          ShippingAddressRecipe(),
          SearchRecipe(),
          NationRecipe(),
          LoginRecipe(state),
          MyPageRecipe(),
          CartRecipe(),
        ],
      },
      NavbarRecipe(state),
    ],
  };
};


