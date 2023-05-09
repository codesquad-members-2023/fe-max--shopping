import { HeroController } from "./HeroController.js";
import { HeroModel } from "./HeroModel.js";
import { HeroView } from "./HeroView.js";

export const initHero = () => {
  const hero = new HeroController(new HeroModel(), new HeroView());
}