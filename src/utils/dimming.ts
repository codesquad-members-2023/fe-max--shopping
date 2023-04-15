import { $ } from "./domUtils";

export const dimMain = () => {
  $(".main-dimmer").classList.add("dimmed");
};

export const undimMain = () => {
  $(".main-dimmer").classList.remove("dimmed");
};
