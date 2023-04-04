import { Base } from "./component/Base.js";
import { Header } from "./component/header/Header.js";

class App extends Base {
  constructor() {
    super("div");
    this.setAttribute("id", "root");
    const header = new Header();

    this.setChildren(header);
    document.body.appendChild(this.node);
  }
}

new App();
