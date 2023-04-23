import { Backdrop } from "./component/Backdrop.js";

export class Observer {
  constructor() {
    this.layer = [];
  }

  register(observer) {
    this.layer.push(observer);
  }

  notify(observer) {
    this.layer.forEach((obs) => {
      if (obs !== observer) {
        obs.hide();
      }
    });
    Backdrop.show();
  }
}
