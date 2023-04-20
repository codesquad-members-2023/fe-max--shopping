import { BASE_URL } from "../../../constants/BASE_URL";
import { $ } from "../../../utils/domUtils";
import { fetchData } from "../../../utils/fetchData";

interface heroImage {
  src: string;
  id: number;
}

export const renderHeroSection = () => {
  const url = new URL("/hero_image", BASE_URL);

  return fetchData(url.href).then((data: heroImage[]) => {
    const $imageContainer = $(".hero-section__image-container");
    const template = data.reduce((acc, { src }) => acc + heroSectionView(src), "");

    $imageContainer.insertAdjacentHTML("beforeend", template);
  });
};

const heroSectionView = (src: string) => {
  return `
<img
  class="hero-section__image"
  src="${src}"
  alt="캐러셀 이미지"
/>`;
};
