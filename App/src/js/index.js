import { App } from "./components/App.js";
import { getState } from "./util/apiFetcher.js";
(async function () {
  let state = await getState();
  const app = new App(state);

  app.render();
  app.onload();
})();
