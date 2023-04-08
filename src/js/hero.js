const slide = document.querySelector('.hero__slide');
const items = slide.children;

const prevBtn = document.querySelector('.hero__prev-btn');
const nextBtn = document.querySelector('.hero__next-btn');

const width = items[0].clientWidth;
const middleIndex = Math.floor(items.length / 2);
let counterIndex = middleIndex;
let isTransitioning = false;

hideExceptIndex(items, counterIndex);
slide.style.transform = `translateX(${-width * counterIndex}px)`;

nextBtn.addEventListener('click', () => {
  if (isTransitioning) return;

  isTransitioning = true;
  slide.style.transition = 'all 117ms';
  counterIndex++;
  items[counterIndex].style.visibility = `visible`;
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
});

prevBtn.addEventListener('click', () => {
  if (isTransitioning) return;

  isTransitioning = true;
  slide.style.transition = 'all 117ms';
  counterIndex--;
  items[counterIndex].style.visibility = `visible`;
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
});

slide.addEventListener('transitionend', () => {
  slide.style.transition = 'none';
  if (counterIndex > middleIndex) {
    slide.append(slide.firstElementChild);
    counterIndex--;
  } else if (counterIndex < middleIndex) {
    slide.prepend(slide.lastElementChild);
    counterIndex++;
  }

  hideExceptIndex(items, counterIndex);
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
  isTransitioning = false;
});

function hideExceptIndex(items, index) {
  for (let i = 0; i < items.length; i++) {
    if (i == index) {
      items[i].style.visibility = 'visible';
      continue;
    }
    items[i].style.visibility = 'hidden';
  }
}
