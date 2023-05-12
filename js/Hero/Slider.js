export default class Slider {
  constructor({ target, data = [] }) {
    this.$target = target;
    this.showIndex = 0;
    this.intervalId = null;
    this.automaticSlideMs = 10000;

    this.data = data;
  }

  init() {
    this.$target.innerHTML = this.#template();
    this.$slider = this.$target.querySelector('.slider');
    this.$nextBtn = this.$target.querySelector('.chevron--right');
    this.$prevBtn = this.$target.querySelector('.chevron--left');
    this.$btns = this.$target.querySelectorAll('.chevron');
    this.#addEvents();
    this.#automaticSlideAfter(this.automaticSlideMs);
  }

  #template() {
    return `
      <button class="chevron chevron--left" type="button">
        <img class="icon" src="./assets/icons/left-btn.svg" alt="chevron-left-icon" />
      </button>

      <section class="slider">
        <ul class="slider__card-container">
          ${this.data.reduce(
            (acc, curr, idx) => `
              ${acc} <li class="slider__card" data-index=${idx} data-status=${idx === 0 ? 'show' : 'unknown'}>
                ${
                  idx === 0
                    ? "<div class='hero__img-title font-BoldXL'>해외 쇼핑을 즐기고 한국 직불 카드 또는<br />한국 신용카드로 결제하십시오</div>"
                    : ''
                }
                <img class="hero__img" src="${curr.src}" alt="${curr.alt}" />
              </li>
            `,
            '',
          )}
        </ul>
      </section>

      <button class="chevron chevron--right" type="button">
        <img class="icon" src="./assets/icons/right-btn.svg" alt="chevron-right-icon" />
      </button>
    `;
  }

  #addEvents() {
    this.$btns.forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        this.#clickHandler(evt.target);
      });
    });
  }

  #clickHandler(el) {
    this.#automaticSlideAfter(this.automaticSlideMs);

    const isLeft = !!el.closest('.chevron--left');
    const isRight = !isLeft && !!el.closest('.chevron--right');

    if (isLeft) {
      this.#showPrevCard();
    } else if (isRight) {
      this.#showNextCard();
    }
  }

  #showNextCard() {
    const { showIndex, data } = this;

    const nextIndex = showIndex + 1 <= data.length - 1 ? showIndex + 1 : 0;

    const currentSlide = this.$slider.querySelector(`[data-index="${showIndex}"]`);
    const nextSlide = this.$slider.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = 'before';
    nextSlide.dataset.status = 'appear-from-after';

    setTimeout(() => {
      nextSlide.dataset.status = 'show';
      this.showIndex = nextIndex;
    }, 5);
  }

  #showPrevCard() {
    const { showIndex, data } = this;

    const prevIndex = showIndex - 1 >= 0 ? showIndex - 1 : data.length - 1;

    const currentSlide = this.$slider.querySelector(`[data-index="${showIndex}"]`);
    const prevSlide = this.$slider.querySelector(`[data-index="${prevIndex}"]`);

    currentSlide.dataset.status = 'after';
    prevSlide.dataset.status = 'appear-from-before';

    setTimeout(() => {
      prevSlide.dataset.status = 'show';
      this.showIndex = prevIndex;
    }, 5);
  }

  #automaticSlideAfter(ms) {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.#showNextCard(), ms);
  }
}
