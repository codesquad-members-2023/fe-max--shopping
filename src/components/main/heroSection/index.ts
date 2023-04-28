import { HeroSectionView } from "./heroSectionView";
import { HeroSectionPresenter } from "./heroSectionPresenter";
import { HeroSectionModel } from "./heroSectionModel";

export const initHeroSection = () => {
  const heroSectionModel = new HeroSectionModel();
  const heroSectionPresenter = new HeroSectionPresenter(heroSectionModel);
  new HeroSectionView(heroSectionPresenter);
};
