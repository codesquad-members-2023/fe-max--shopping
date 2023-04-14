import { ElementStyler } from "./util/set-style";

export class BaseElement {
  constructor(element) {
    this.element = element;
    this.elementStyler = new ElementStyler(element);
  }
}
