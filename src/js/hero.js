async function initHeroSlides() {
  const slides = document.querySelector('.hero-slider__slides');
  const images = await fetchImages();
  const addedImages = addImageInBothEnd(images);

  insertImagesInSlides(slides, addedImages);
  startHeroSlides(slides);
}

function fetchImages() {
  return fetch('./src/data/images.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network error');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('error', error);
    });
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

    if (direction === 'left') {
      slideIndex -= 1;
    }
    if (direction === 'right') {
      slideIndex += 1;
    }

    moveSlides();
    checkIndex();
  }

  function moveSlides() {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function checkIndex() {
    slide.addEventListener('transitionend', () => {
      isMoving = false;
      const slidesArray = [...slide.querySelectorAll('img')];

      if (slideIndex === 0) {
        slide.style.transition = 'none';
        slideIndex = slidesArray.length - 2;
        moveSlides();
      }
      if (slideIndex === slidesArray.length - 1) {
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
