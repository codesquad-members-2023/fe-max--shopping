const slide = document.querySelector(".hero__slide");
const images = document.querySelectorAll(".hero__slide img");

const prevBtn = document.querySelector(".hero__prev-btn");
const nextBtn = document.querySelector(".hero__next-btn");

const width = images[0].clientWidth;
const middleIndex = Math.floor(images.length / 2);
let counterIndex = middleIndex;
let isTransitioning = false;

slide.style.transform = `translateX(${-width * counterIndex}px)`;

nextBtn.addEventListener("click", () => {
  if (isTransitioning) return;

  isTransitioning = true;
  slide.style.transition = "transform 117ms";
  counterIndex++;
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
});

prevBtn.addEventListener("click", () => {
  if (!isTransitioning) return;

  isTransitioning = true;
  slide.style.transition = "transform 117s";
  counterIndex--;
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
});

slide.addEventListener("transitionend", () => {
  slide.style.transition = "none";
  if (counterIndex > middleIndex) {
    slide.append(slide.firstElementChild);
    counterIndex--;
  } else if (counterIndex < middleIndex) {
    slide.prepend(slide.lastElementChild);
    counterIndex++;
  }
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
  isTransitioning = false;
});
