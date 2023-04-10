import { App } from "./components/App.js";
import { viewData } from "./viewData.js";
(function () {
  const appInnerData = viewData()
  const app = new App(appInnerData);
  app.render();
})();
