import { RecentSearch } from "./SearchSuggestion";

export class SearchSuggestionView {
  recentSearchView(recentSearches: RecentSearch[]) {
    return `
      <ul class="search-suggestion__recent-search-list">
        ${recentSearches
          .map(
            (list: RecentSearch) => `
            <li dataset="${list.id}">
              <a href="#">${list.text}</a>
              <button>
                <img src="./src/assets/close-icon.svg" alt="삭제 버튼" />
              </button>
            </li>`
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
}
