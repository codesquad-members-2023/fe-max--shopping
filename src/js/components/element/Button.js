import { Component } from '../base/Component.js';

export class Button extends Component {
  constructor(text, buttonType) {
    super('button', 'BUTTON');
    this.node.classList.add(buttonType);
    this.node.textContent = text;
  }
}
