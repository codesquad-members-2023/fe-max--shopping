import { addHeroSectionEventListeners, renderHeroSection } from "./heroSectionView";
import {
  createIntervalIdStateManager,
  createMoveImageHandler,
  setIntervalImageMove,
} from "./heroSectionController";

export const initHeroSection = () => {
  renderHeroSection().then(() => {
    const moveImageHandler = createMoveImageHandler();
    const intervalIdStateManager = createIntervalIdStateManager();

    addHeroSectionEventListeners(moveImageHandler, intervalIdStateManager);
    setIntervalImageMove(moveImageHandler, intervalIdStateManager);
  });
};
