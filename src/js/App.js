import { Backdrop } from "./component/Backdrop.js";
import { Base } from "./component/Base.js";
import { Header } from "./component/header/Header.js";
import { Main } from "./component/main/Main.js";

class App extends Base {
  constructor() {
    super("div");
    this.backdrop = new Backdrop();
    this.header = new Header();
    this.main = new Main();

    this.init();
  }

  init() {
    this.setAttribute("id", "root");
    this.setChildren(this.backdrop, this.header, this.main);

    document.body.appendChild(this.node);
  }
}

new App();
