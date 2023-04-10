import { Base } from "./Base.js";

export class Backdrop extends Base {
  static backdropNode;

  static show() {
    Backdrop.backdropNode.setStyle("display", "block");
  }

  static hide() {
    Backdrop.backdropNode.setStyle("display", "none");
  }

  constructor() {
    super("div");
    this.init();
  }

  init() {
    this.setAttribute("id", "backdrop");
    Backdrop.backdropNode = this;
  }
}
