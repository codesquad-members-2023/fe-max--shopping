import { addHeroSectionEventListeners, renderHeroSection } from "./heroSectionView";
import { createMoveImageHandler, setIntervalImageMove } from "./heroSectionController";

export const initHeroSection = () => {
  renderHeroSection() //
    .then(() => {
      const moveImageHandler = createMoveImageHandler();

      addHeroSectionEventListeners(moveImageHandler);
      setIntervalImageMove(moveImageHandler);
    });
};
