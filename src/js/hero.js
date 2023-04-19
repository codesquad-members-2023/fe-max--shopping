async function initHeroSlides() {
  try {
    const slides = document.querySelector('.hero-slider__slides');
    const response = await fetch('http://localhost:4000/heroImages');
    const images = await response.json();
    const addedImages = addImageInBothEnd(images);

    insertImagesInSlides(slides, addedImages);
    startHeroSlides(slides);
  } catch (error) {
    console.error('에러..', error);
  }
}

function startHeroSlides(slide) {
  const prevBtn = document.querySelector('.hero-slider__btn--prev');
  const nextBtn = document.querySelector('.hero-slider__btn--next');
  let slideIndex = 1;
  let isMoving = false;

  moveSlides();
  setInterval(moveNext, 10000);

  prevBtn.addEventListener('click', movePrev);
  nextBtn.addEventListener('click', moveNext);

  function movePrev() {
    if (isMoving) return;
    moveHandler('left');
  }

  function moveNext() {
    if (isMoving) return;
    moveHandler('right');
  }

  function moveHandler(direction) {
    isMoving = true;
    slide.style.transition = 'transform 450ms ease-in-out';

    slideIndex += direction === 'left' ? -1 : 1;

    moveSlides();
    checkIndex();
  }

  function moveSlides() {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function checkIndex() {
    slide.addEventListener('transitionend', () => {
      const slidesArray = [...slide.querySelectorAll('img')];
      const isFirstSlide = slideIndex === 0;
      const isLastSlide = slideIndex === slidesArray.length - 1;
      isMoving = false;

      if (isFirstSlide) {
        slide.style.transition = 'none';
        slideIndex = slidesArray.length - 2;
        moveSlides();
      }
      if (isLastSlide) {
        slide.style.transition = 'none';
        slideIndex = 1;
        moveSlides();
      }
    });
  }
}

function insertImagesInSlides(slide, images) {
  const fragment = document.createDocumentFragment();

  images.forEach((item) => {
    const img = document.createElement('img');
    img.src = item.url;
    img.alt = item.alt;
    fragment.appendChild(img);
  });

  slide.appendChild(fragment);
}

function addImageInBothEnd(imagesArray) {
  const firstImage = imagesArray[0];
  const lastImage = imagesArray[imagesArray.length - 1];

  return [lastImage, ...imagesArray, firstImage];
}

initHeroSlides();
