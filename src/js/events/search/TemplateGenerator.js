export class TemplateGenerator {
  generateSuggest(terms) {
    const suggestListTemplate = terms.reduce((acc, cur) => {
      return (acc += `<li class="suggestion search-list">
          <img src="./src/images/arrow-top-right.svg" alt="이동">
          <span>${cur}</span>
        </li>`);
    }, '');
    return suggestListTemplate;
  }
  generateHistoryAndSuggestions(termsObj) {
    const HistoryTemplate =
      termsObj.history.reduce((acc, cur) => {
        return (acc += ` <li class="history search-list" >
          <span>${cur}</span>
          <img src="./src/images/close.svg" alt="삭제">
        </li>`);
      }, '') + this.generateSuggest(termsObj.suggest);
    return HistoryTemplate;
  }
  generateAutoComplete(terms, input) {
    if (!input || typeof input !== 'string') {
      throw new Error('Input is invalid.');
    }

    const inputRegex = new RegExp(input, 'gi');
    const AutoCompleteTemplate = terms.reduce((acc, cur) => {
      const highlighted = cur.keyword.replace(
        inputRegex,
        `<span class="highlighted">${input}</span>`
      );
      return (acc += ` <li class="autocomplete search-list" >
          <span>${highlighted}</span>
        </li>`);
    }, '');

    return AutoCompleteTemplate;
  }
  generateSlides(slides) {
    const slidesTemplate = slides.reduce((acc, cur, i) => {
      return (acc += `<li class="slide-item">
        <img src="${cur}" alt="${i}">
    </li>`);
    }, '');
    return slidesTemplate;
  }
  generateShoppingMenu(shoppingObj) {
    const shoppingMenuTemplate = Object.keys(shoppingObj).reduce((acc, cur) => {
      return (acc += `<li class="side__list-item">
      <span class="side__list-item-name">${cur}</span>
      <img class="side__list-item-arrow" src="./src/images/chevron-right-gray.svg" alt="더보기">
    </li>`);
    }, '');
    return shoppingMenuTemplate;
  }
  generateCollapsibleMenu(collapsibleObj) {
    const simpleViewLiTemplate = ` <li class="side__view-simple side__view-controll" data-id="simple">
      <span class="side__list-item-name" data-id="simple">간단히 보기</span>
      <img src="./src/images/chevron-up-gray.svg" alt="접기">
    </li>`;

    const collapsibleMenuTemplate =
      Object.keys(collapsibleObj).reduce((acc, cur) => {
        return (acc += `<li class="side__list-item">
        <span class="side__list-item-name">${cur}</span>
        <img class="side__list-item-arrow" src="./src/images/chevron-right-gray.svg" alt="더보기">
    </li>
  `);
      }, '') + simpleViewLiTemplate;
    return collapsibleMenuTemplate;
  }
  generateDigitalMenu(digitalObj) {
    const digitalMenuTemplate = Object.keys(digitalObj).reduce((acc, cur) => {
      return (acc += `<li class="side__list-item">
      <span class="side__list-item-name">${cur}</span>
      <img class="side__list-item-arrow" src="./src/images/chevron-right-gray.svg" alt="더보기">
    </li>`);
    }, '');
    return digitalMenuTemplate;
  }
  generateSubMenu(menuObj, keyText) {
    const returnToMenuTemplate = `<li class="side__list-item--back side__view-controll" data-id="close-sub">
      <img src="./src/images/arrow-left-gray.svg" alt="돌아가기" data-id="close-sub">
      <span class="side__list-item-name" data-id="close-sub">주메뉴</span>
  </li>`;
    const subTitleTemplate = `<li class="side__title-text">
      <span>${keyText}</span>
  </li>`;
    const subListTemplate = menuObj[keyText].reduce((acc, cur) => {
      return (acc += `<li class="side__list-item">
        <span class="side__list-item-name">${cur}</span>
    </li>`);
    }, '');
    const subMenuTemplate =
      returnToMenuTemplate + subTitleTemplate + subListTemplate;

    return subMenuTemplate;
  }
}
