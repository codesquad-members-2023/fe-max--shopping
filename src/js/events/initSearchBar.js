import { $, $All } from '../utils/dom.js';
import { handleDimming, modalState } from '../utils/dim.js';
const mainSearchBarArea = document.querySelector('.main-search-bar');
const searchBar = document.searchForm.searchBar;
const searchLayer = document.querySelector('.search-layer');
const esc = 27;

export function initSearchBar() {
  mainSearchBarArea.addEventListener('click', () => {
    handleModal();
    const jsonData = new JsonData();
    const data = jsonData.load('./src/data/db.json');
    console.log(data);
    const resultView = new ResultView(searchLayer);
    resultView.renderSuggestion(data);
  });
  document.addEventListener('click', removeModal);
  searchBar.addEventListener('keydown', keyboardNavigationHandler);
  searchLayer.addEventListener('keydown', addFocus);
}

function handleModal() {
  modalState.searchModal = true;
  searchLayer.classList.remove('hidden');
  handleDimming();
}

function removeModal(e) {
  if (!e.target.closest('.main-search-bar') || e.keyCode === esc) {
    modalState.searchModal = false;
    handleDimming();
    searchLayer.classList.add('hidden');
  }
}

function getFirstAndLastLiElement() {
  const firstLi = searchLayer.firstElementChild;
  const lastLi = searchLayer.lastElementChild;
  return { firstLi, lastLi };
}

function keyboardNavigationHandler(e) {
  const { firstLi, lastLi } = getFirstAndLastLiElement();
  console.log(e.key);
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
  }
  if (e.key === 'ArrowDown') {
    firstLi.focus();
    searchBar.value = firstLi.innerText;
  }
  if (e.key === 'ArrowUp') {
    lastLi.focus();
    searchBar.value = lastLi.innerText;
  }
  if (e.keyCode === esc) {
    removeModal(e);
  }
}

function addFocus(e) {
  const { firstLi, lastLi } = getFirstAndLastLiElement();
  let onFocus = document.activeElement;

  if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.keyCode !== esc) {
    return;
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
  }

  if (e.key === 'ArrowDown') {
    if (onFocus === lastLi) {
      searchBar.focus();
    } else {
      searchBar.value = onFocus.nextElementSibling.innerText;
      onFocus.nextElementSibling.focus();
    }
  }

  if (e.key === 'ArrowUp') {
    if (onFocus === firstLi) {
      searchBar.focus();
    } else {
      searchBar.value = onFocus.previousElementSibling.innerText;
      onFocus.previousElementSibling.focus();
    }
  }
  if (e.keyCode === esc) {
    removeModal(e);
  }
}

///

class JsonData {
  constructor() {}
  async load(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('invalid response');
    }
    const data = await response.json();
    // const { recent, suggest } = await response.json();
    // console.log(recent);
    // console.log(suggest);
    return data;
  }
}

class ResultView {
  constructor(parent) {
    this.parent = parent;
    console.log(this.parent);
  }

  renderRecentSearchResults(data) {
    //초기화 innerHTML = ''
    //조건
    //data의 길이가 0이면, 리턴
    //data의 길이가 0이 아니면 데이터를 가지고 리듀스로 템플릿을 만든다
    //5개만
    //insertAdjacentHTML로 템플릿을 부모노드에 붙인걸 리턴 ??
  }
  async renderSuggestion(data) {
    const template = await generateTemplate.suggestion(data);
    console.log(template);
    this.parent.insertAdjacentHTML('beforeend', template);
  }
}

const generateTemplate = {
  async suggestion(obj) {
    const data = await obj;
    console.log(data.suggest);
    console.log(data.suggest.length);
    const suggestion = data.suggest;
    searchLayer.innerHTML = '';

    if (!suggestion.length) {
      return;
    } else {
      const suggestListTemplate = shuffleArray(suggestion)
        .slice(0, 10)
        .reduce((acc, cur) => {
          return (acc += `<li class="suggestion search-list" tabindex="0">
          <img src="./src/images/arrow-top-right.svg" alt="이동">
          <span>${cur}</span>
        </li>`);
        }, '');
      return suggestListTemplate;
    }
  },
  searchResult() {},
  autocomplete() {},
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
