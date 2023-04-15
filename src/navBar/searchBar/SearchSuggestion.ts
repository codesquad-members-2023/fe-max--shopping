import { BASE_URL } from "../../constants/BASE_URL";
import { $, $$ } from "../../utils/domUtils";
import { searchData, SearchSuggestionModel } from "./SearchSuggestionModel";
import { SearchSuggestionView } from "./SearchSuggestionView";

export class SearchSuggestion {
  model: SearchSuggestionModel;
  view: SearchSuggestionView;

  constructor() {
    this.model = new SearchSuggestionModel();
    this.view = new SearchSuggestionView();
  }

  async getRecentSearches(): Promise<searchData[]> {
    const RECENT_SEARCHES_LIMIT = 5;

    try {
      const response = await fetch(
        `${BASE_URL}/recent?_sort=id&_order=desc&_limit=${RECENT_SEARCHES_LIMIT}`
      );

      if (!response.ok) {
        throw new Error(
          `HTTP 요청이 실패했습니다. 상태 코드: ${response.status}, 상태 메시지: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [];
    }
  }

  async getRecommendSearches(): Promise<string[]> {
    try {
      const response = await fetch(`${BASE_URL}/recommend/`);

      if (!response.ok) {
        throw new Error(
          `HTTP 요청이 실패했습니다. 상태 코드: ${response.status}, 상태 메시지: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);

      return [];
    }
  }

  async fetchSearches() {
    const [recentSearches, recommendSearches] = await Promise.all([
      this.getRecentSearches(),
      this.getRecommendSearches(),
    ]);

    this.model.setRecentSearches(recentSearches);
    this.model.setRecommendSearches(recommendSearches);
  }

  async initSuggestionRender() {
    await this.fetchSearches();
    this.renderView(
      this.view.recentSearchView(this.model.getRecentSearches()) +
        this.view.recommendSearchView(this.model.getRecommendSearches())
    );
  }

  renderView(view: string) {
    const searchSuggestion = $(".search-suggestion");

    searchSuggestion.innerHTML = view;
  }

  async requestDeleteRecentSearch(target: HTMLElement) {
    const recentSearch = target.closest("li");

    if (recentSearch == null) {
      return;
    }

    const id = recentSearch.dataset.id;

    try {
      const response = await fetch(`${BASE_URL}/recent/${id}`, { method: "DELETE" });

      if (!response.ok) {
        throw new Error(
          `HTTP 요청이 실패했습니다. 상태 코드: ${response.status}, 상태 메시지: ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  handleSuggestionKeyDown(event: KeyboardEvent, $searchSuggestion: Element) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
      return;
    }

    const $searchSuggestions = $$("li", $searchSuggestion);
    const prevFocusIndex = this.model.getFocusIndex();
    const prevFocusElement = $searchSuggestions[prevFocusIndex];

    if (event.key === "ArrowDown") {
      this.model.incrementFocusIndex();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.model.decrementFocusIndex();
    }

    if (prevFocusElement instanceof HTMLElement) {
      prevFocusElement.style.backgroundColor = "#ffffff";
    }

    let focusIndex = this.model.getFocusIndex();
    if ($searchSuggestions.length === focusIndex) {
      this.model.initFocusIndex();
      focusIndex = this.model.getFocusIndex();
    }

    const focusElement = $searchSuggestions[focusIndex];
    const searchInput = event.currentTarget;
    const focusText = $("a", focusElement).textContent;

    if (focusElement instanceof HTMLElement) {
      focusElement.style.backgroundColor = "#EFF2F2";
    }

    if (searchInput instanceof HTMLInputElement && focusText != null) {
      searchInput.value = focusText;
    }
  }

  async handleDeleteButtonClick(event: Event) {
    event.preventDefault();

    if (
      !(event.target instanceof HTMLElement) ||
      !event.target.closest(".search-suggestion__delete-button")
    ) {
      return;
    }

    try {
      await this.requestDeleteRecentSearch(event.target);
      await this.fetchSearches();
    } catch (error) {
      console.error(error);
    }

    this.renderView(
      this.view.recentSearchView(this.model.getRecentSearches()) +
        this.view.recommendSearchView(this.model.getRecommendSearches())
    );
  }

  async handleSearchBarSubmit(event: Event, $searchInput: HTMLInputElement) {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/recent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: $searchInput.value }),
      });

      if (!response.ok) {
        throw new Error(
          `HTTP 요청이 실패했습니다. 상태 코드: ${response.status}, 상태 메시지: ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(error);
    }

    $searchInput.value = "";
    await this.fetchSearches();
    this.renderView(
      this.view.recentSearchView(this.model.getRecentSearches()) +
        this.view.recommendSearchView(this.model.getRecommendSearches())
    );
  }

  async handleSearchInputChange($searchInput: HTMLInputElement) {
    const searchInput = $searchInput.value;

    try {
      const response = await fetch(`${BASE_URL}/keyword?q=${searchInput}`);

      if (!response.ok) {
        throw new Error(
          `HTTP 요청이 실패했습니다. 상태 코드: ${response.status}, 상태 메시지: ${response.statusText}`
        );
      }

      const suggestions = await response.json();

      this.model.setSearchSuggestions(suggestions);
    } catch (error) {
      console.error(error);
    }

    this.renderView(this.view.searchSuggestionView(this.model.getSearchSuggestions()));
  }
}
