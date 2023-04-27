import { FooterRecipe } from "./footer/FooterRecipe.js";
import { HeaderRecipe } from "./header/HeaderRecipe.js";
import { MainRecipe } from "./main/MainRecipe.js";
import { SidebarRecipe } from "./sidebar/SidebarRecipe.js";

export function AppRecipe (state) {
  return {
    header: HeaderRecipe(state),
    sidebar: SidebarRecipe(state),
    main: MainRecipe(state),
    footer: FooterRecipe(state),
  };
};