import { $ } from "../../../utils/domUtils";
import { ensureHTMLElement } from "../../../utils/typeCheckUtils";
import { HeroSectionPresenter } from "./heroSectionPresenter";
import { HeroImage } from "./types";

export class HeroSectionView {
  private presenter: HeroSectionPresenter;

  private $imageContainer: HTMLElement;
  private $prevButton: Element;
  private $nextButton: Element;

  constructor(presenter: HeroSectionPresenter) {
    this.presenter = presenter;

    this.$imageContainer = ensureHTMLElement($(".hero-section__image-container"));
    this.$prevButton = $(".hero-section__prev-button");
    this.$nextButton = $(".hero-section__next-button");

    this.render();
  }

  private async render() {
    const images = await this.presenter.fetchImages();
    this.imageRender(images);
    this.presenter.setIntervalImageMove(this.$imageContainer);

    this.$prevButton.addEventListener("click", () =>
      this.presenter.moveToPrevImage(this.$imageContainer)
    );
    this.$nextButton.addEventListener("click", () =>
      this.presenter.moveToNextImage(this.$imageContainer)
    );
  }

  private imageRender(data: HeroImage[]) {
    const imageViews = data.reduce((acc, { src }) => acc + this.createImageView(src), "");

    this.$imageContainer.insertAdjacentHTML("beforeend", imageViews);
  }

  private createImageView(src: string) {
    return `
      <img
        class="hero-section__image"
        src="${src}"
        alt="캐러셀 이미지"
      />`;
  }
}
