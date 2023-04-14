import { BASE_URL } from "../../constants/BASE_URL";
import { $, $$ } from "../../utils/domUtils";
import { RecentSearch, SearchSuggestionModel } from "./SearchSuggestionModel";
import { SearchSuggestionView } from "./SearchSuggestionView";

export class SearchSuggestion {
  model: SearchSuggestionModel;
  view: SearchSuggestionView;

  constructor() {
    this.model = new SearchSuggestionModel();
    this.view = new SearchSuggestionView();

    (async () => {
      await this.fetchSearches();
      this.renderView();
    })();
  }

  async getRecentSearches(): Promise<RecentSearch[]> {
    const RECENT_SEARCHES_LIMIT = 5;
    const response = await fetch(
      `${BASE_URL}/recent?_sort=id&_order=desc&_limit=${RECENT_SEARCHES_LIMIT}`
    );

    return await response.json();
  }

  async getRecommendSearches(): Promise<string[]> {
    const response = await fetch(`${BASE_URL}/recommend`);

    return await response.json();
  }

  async fetchSearches() {
    const [recentSearches, recommendSearches] = await Promise.all([
      this.getRecentSearches(),
      this.getRecommendSearches(),
    ]);

    this.model.setRecentSearches(recentSearches);
    this.model.setRecommendSearches(recommendSearches);
  }

  renderView() {
    const searchSuggestion = $(".search-suggestion");

    searchSuggestion.innerHTML =
      this.view.recentSearchView(this.model.getRecentSearches()) +
      this.view.recommendSearchView(this.model.getRecommendSearches());
  }

  requestDeleteRecentSearch(target: HTMLElement) {
    const recentSearch = target.closest("li");

    if (recentSearch == null) {
      return;
    }

    const id = recentSearch.dataset.id;

    return fetch(`${BASE_URL}/recent/${id}`, { method: "DELETE" }).catch((error) => {
      console.log("An error occurred" + error);
    });
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

  async handleDeleteButtonClick({ target }: Event) {
    if (!(target instanceof HTMLElement) || !target.closest(".search-suggestion__delete-button")) {
      return;
    }

    await this.requestDeleteRecentSearch(target);
    await this.fetchSearches();
    this.renderView();
  }
}
