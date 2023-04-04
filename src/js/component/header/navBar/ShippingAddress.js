import { Base } from "../../Base.js";

export class ShippingAddress extends Base {
  constructor() {
    super("a");
    this.setAttribute("id", "shippingAddress");

    const symbols = new Base("img");
    symbols.setAttribute("src", "./src/assets/location.svg");

    const addressLabelText = new Base("span");
    addressLabelText.setTextContent("배송처");
    addressLabelText.setAttribute("class", "address__labelText");

    const addressLabel = new Base("div");
    addressLabel.setChildren(symbols, addressLabelText);
    addressLabel.setAttribute("class", "address__label");

    const adddressText = new Base("span");
    adddressText.setTextContent("대한민국");
    adddressText.setAttribute("class", "adddress__text");

    this.setChildren(addressLabel, adddressText);
  }
}
