import { HeroController } from "./HeroController.js";
import { HeroModel } from "./heroModel.js";
import { HeroView } from "./heroView.js";

export const initHero = () => {
  const hero = new HeroController(new HeroModel(), new HeroView());
}