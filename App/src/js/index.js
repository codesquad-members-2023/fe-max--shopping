import { App } from "./components/App.js";
import { getState } from "./utils/apiFetcher.js";

(async function () {
  const state = await getState();
  const app = new App(state);

  app.render();
  app.onload();
})();
