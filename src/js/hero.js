const hero = document.querySelector('.hero');
const slide = document.querySelector('.hero__slide');
const items = slide.children;
const prevBtn = document.querySelector('.hero__prev-btn');
const nextBtn = document.querySelector('.hero__next-btn');

let width;
const middleIndex = Math.floor(items.length / 2);
let counterIndex = middleIndex;
let isTransitioning = false;
const AUTO_ACTION_WAITTIME = 10000;
let autoSlideTimer = setInterval(goToNextItem, AUTO_ACTION_WAITTIME);

showOnlyCurrent(items, counterIndex);
updateTranslateX();

nextBtn.addEventListener('click', () => {
  clearInterval(autoSlideTimer);
  goToNextItem();
  autoSlideTimer = setInterval(goToNextItem, AUTO_ACTION_WAITTIME);
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlideTimer);
  goToPrevItem();
  autoSlideTimer = setInterval(goToNextItem, AUTO_ACTION_WAITTIME);
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
  showOnlyCurrent(items, counterIndex);
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
  isTransitioning = false;
});

window.addEventListener('resize', updateTranslateX);

function showOnlyCurrent(items, index) {
  for (let i = 0; i < items.length; i++) {
    if (i == index) {
      items[i].style.visibility = 'visible';
      continue;
    }
    items[i].style.visibility = 'hidden';
  }
}

function updateTranslateX() {
  width = hero.clientWidth;
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
}

function goToNextItem() {
  if (isTransitioning) return;
  isTransitioning = true;
  slide.style.transition = 'all 250ms';
  counterIndex++;
  items[counterIndex].style.visibility = 'visible';
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
}

function goToPrevItem() {
  if (isTransitioning) return;
  isTransitioning = true;
  slide.style.transition = 'all 250ms';
  counterIndex--;
  items[counterIndex].style.visibility = 'visible';
  slide.style.transform = `translateX(${-width * counterIndex}px)`;
}
