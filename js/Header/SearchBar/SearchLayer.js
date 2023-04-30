export class SearchLayer {
  constructor($target) {
    this.$target = $target;
  }

  async render(data) {
    const renderData = await data;
    this.$target.innerHTML = this.template(renderData);
  }

  template(searchData) {
    const { searchHistory, suggestion } = searchData;
    return `<ul class="search-bar__result-container">
              ${this.makeRecentHistoryTemplate(searchHistory)}
              ${this.makeTrendingSuggestionTemplate(suggestion)}
            </ul>`;
  }

  makeRecentHistoryTemplate(data) {
    const historyData = data.toReversed().slice(0, 5);
    return `${historyData
      .map(
        (item) =>
          `<li class="search-bar__result recentSearch">
            <a href="#">${item.content}</a>
            <button>
              <img src="./assets/icons/close.svg" alt="" />
            </button>  
          </li>`,
      )
      .join('')}`;
  }

  makeTrendingSuggestionTemplate(data) {
    return `${data
      .map(
        (item) =>
          `<li class="search-bar__result suggestion">
            <img src="./assets/icons/arrow-top-right.svg" alt="" />
            <a href="#">${item.content}</a>
          </li>`,
      )
      .join('')}`;
  }

  // makeAutoSuggestionTemplate() {
  // 아직 구현중...
  // }

  updateLayer(model) {
    const { searchData } = model;
    this.render(searchData);
  }

  renderAutoSuggestion({ content }, prefix) {
    const resultList = document.querySelector('.search-bar__result-container');
    const regex = new RegExp(prefix, 'gi');
    const matchData = content.filter((item) => item.content.match(regex));
    const autoTemplate = `${matchData
      .map(
        (el, index) =>
          `<li class="search-bar__result autoSuggestion" data-index="${index}">
             <a href="#">${el.content}</a>
           </li>`,
      )
      .join('')}`;
    resultList.innerHTML = autoTemplate;
  }
}
