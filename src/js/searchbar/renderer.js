class Renderer {
  constructor(container, data) {
    this.container = container;
    this.data = data;
  }

  getTemplate() {}

  render() {
    const template = this.getTemplate();
    this.container.innerHTML = '';
    const listContainer = document.createElement('ul');
    listContainer.innerHTML = template;
    this.container.appendChild(listContainer);
  }
}

export class RecommendAndHistoryRenderer extends Renderer {
  constructor(container, data) {
    super(container, data);
  }

  #getHistoryTemplate(item) {
    return `
      <li data-type='history' class='search-item'>
        <a href="#">
          <p>${item}</p>
          <img src="./src/assets/images/icn_close.svg" class="icn_close" alt=""/>
        </a>
      </li>
    `;
  }

  #getRecommendTemplate(item) {
    return `
      <li data-type='recommend' class='search-item'>
        <a href="#">
          <img src="./src/assets/images/icn_arrow_top_right.svg" alt="" />
          <p>${item}</p>
        </a>
      </li>
    `;
  }

  getTemplate() {
    const { recommendedSearchData, historySearchData } = this.data;

    const recommendSearchLists = recommendedSearchData
      .map((item) => this.#getRecommendTemplate(item))
      .join('');

    if (!historySearchData) return recommendSearchLists;

    const historySearchLists = historySearchData
      .map((item) => this.#getHistoryTemplate(item))
      .join('');

    return historySearchLists + recommendSearchLists;
  }
}

export class AutoSearchRenderer extends Renderer {
  constructor(container, data, prefix) {
    super(container, data);
    this.prefix = prefix;
  }

  getTemplate() {
    let items;

    if (!this.data.length) {
      items = "<li data-type='none'>검색 결과가 없습니다.</li>";
    } else {
      const regex = new RegExp(this.prefix, 'gi');
      items = this.data
        .map(
          (item) => `
          <li data-type='autosearch' class='search-item'>
            <a href="#">
              <p>${item.replace(regex, `<span>${this.prefix}</span>`)}</p>
            </a>
          </li>`,
        )
        .join('');
    }

    return items;
  }
}
