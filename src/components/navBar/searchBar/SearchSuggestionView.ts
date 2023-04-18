import { searchData } from "./SearchSuggestionModel";

export class SearchSuggestionView {
  recentSearchView(recentSearches: searchData[]) {
    return `
      <ul class="search-suggestion__recent-search-list">
        ${recentSearches
          .map(
            (list: searchData) => `
            <li data-id="${list.id}">
              <a href="#">${list.text}</a>
              <button class="search-suggestion__delete-button">
                <img src="./src/assets/close-icon.svg" alt="삭제 버튼" />
              </button>
            </li>
            `
          )
          .join("")}
      </ul>`;
  }

  recommendSearchView(recommendSearches: string[]) {
    return `
      <ul class="search-suggestion__recommend-search-list">
        ${recommendSearches
          .map(
            (list) => `
            <li>
              <img src="./src/assets/arrow-top-right-icon.svg" alt="추천 검색어 아이콘" />
              <a href="#">${list}</a>
            </li>
          `
          )
          .join("")}
      </ul> 
    `;
  }

  searchSuggestionView(searchSuggestions: searchData[]) {
    return `
      <ul class="search-suggestion__recent-search-list">
        ${searchSuggestions
          .map(
            (list: searchData) => `
            <li>
              <a href="#">${list.text}</a>
            </li>
            `
          )
          .join("")}
      </ul>`;
  }
}
