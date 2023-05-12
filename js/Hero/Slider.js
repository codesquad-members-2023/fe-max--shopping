export default class Slider {
  constructor($target) {
    this.$target = $target;
    this.onEventCallback = null;
    this.init();
  }

  init() {
    this.$target.innerHTML = this.template();
    this.$slider = this.$target.querySelector('.slider');
    this.$nextBtn = this.$target.querySelector('.chevron--right');
    this.$prevBtn = this.$target.querySelector('.chevron--left');
    this.addEvents();
  }

  template() {
    return `
      <button class="chevron chevron--left" type="button">
        <img class="icon" src="./assets/icons/left-btn.svg" alt="chevron-left-icon" />
      </button>

      <section class="slider"></section>

      <button class="chevron chevron--right" type="button">
        <img class="icon" src="./assets/icons/right-btn.svg" alt="chevron-right-icon" />
      </button>
    `;
  }

  slidesTemplate(slidesData) {
    return `
      <ul class="slider__card-container">
        ${slidesData.reduce(
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
    `;
  }

  renderSlides(slidesData = []) {
    this.$slider.innerHTML = this.slidesTemplate(slidesData);
  }

  onEvent(callback) {
    this.onEventCallback = callback;
  }

  addEvents() {
    this.$nextBtn.addEventListener('click', (e) => {
      this.onEventCallback(e);
    });

    this.$prevBtn.addEventListener('click', (e) => {
      this.onEventCallback(e);
    });
  }
}
