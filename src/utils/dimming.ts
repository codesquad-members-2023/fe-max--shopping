import { Z_INDEX } from "../constants/Z_INDEX";
import { $ } from "./domUtils";
import { ensureHTMLElement } from "./typeCheckUtils";

export const dim = (zIndex: number) => {
  const $dimmer = ensureHTMLElement($(".dimmer"));

  $dimmer.classList.add("dimmed");
  $dimmer.style.zIndex = zIndex.toString();
};

export const undim = () => {
  const $dimmer = ensureHTMLElement($(".dimmer"));

  $dimmer.classList.remove("dimmed");

  setTimeout(() => {
    $dimmer.style.zIndex = Z_INDEX.HIDE;
  }, 500);
};
