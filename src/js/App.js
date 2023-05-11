import { Observer } from "./Observer.js";
import { Backdrop } from "./component/Backdrop.js";
import { Base } from "./component/Base.js";
import { Header } from "./component/header/Header.js";
import { Main } from "./component/main/Main.js";
import { SideBar} from './component/sideBar/SideBar.js';

class App extends Base {
  constructor() {
    super("div");
    this.observer = new Observer();
    this.sideBar = new SideBar(this.observer);
    this.header = new Header(this.sideBar.controller, this.observer);
    this.main = new Main();
    this.backdrop = new Backdrop(this.header);

    this.init();
  }

  init() {
    this.setAttribute("id", "root");
    this.setChildren(this.header, this.main, this.sideBar.view, this.backdrop);

    document.body.appendChild(this.node);
  }
}

new App();
