import { App } from "./components/App.js";
import { FooterRecipe } from "./recipes/footer/FooterRecipe.js";
import { HeaderRecipe } from "./recipes/header/HeaderRecipe.js";
import { MainRecipe } from "./recipes/main/MainRecipe.js";
import { SidebarRecipe } from "./recipes/sidebar/SidebarRecipe.js";
import { getState } from "./utils/apiFetcher.js";
(async function () {
  const state = await getState();
  const app = new App(state);

  console.log(HeaderRecipe(state));
  console.log(SidebarRecipe(state));
  console.log(MainRecipe(state));
  console.log(FooterRecipe(state));

  app.render();
  app.onload();
})();
