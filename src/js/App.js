import { Base } from "./component/Base.js";
import { Header } from "./component/header/Header.js";

class App extends Base {
  constructor() {
    super("div");
    this.header = new Header();

    this.init();
  }

  init() {
    this.setAttribute("id", "root");
    this.setChildren(this.header);

    document.body.appendChild(this.node);
  }
}

new App();
