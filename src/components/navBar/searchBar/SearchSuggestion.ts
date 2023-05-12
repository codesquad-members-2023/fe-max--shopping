import { BASE_URL } from "../../../constants/BASE_URL";
import { $, $$ } from "../../../utils/domUtils";
import { fetchData } from "../../../utils/fetchData";
import { SearchSuggestionModel } from "./SearchSuggestionModel";
import { SearchSuggestionView } from "./SearchSuggestionView";
import { dim, undim } from "../../../utils/dimming";
import { hideElement, showElement } from "../../../utils/elementVisibility";
import { Z_INDEX } from "../../../constants/Z_INDEX";

export class SearchSuggestion {
  model: SearchSuggestionModel;
  view: SearchSuggestionView;

  constructor(model: SearchSuggestionModel, view: SearchSuggestionView) {
    this.model = model;
    this.view = view;
  }

  async getRecentSearches() {
    const RECENT_SEARCHES_LIMIT = 5;
    const url = `${BASE_URL}/recent?_sort=id&_order=desc&_limit=${RECENT_SEARCHES_LIMIT}`;

    return await fetchData(url);
  }

  async getRecommendSearches() {
    const url = `${BASE_URL}/recommend/`;

    return await fetchData(url);
  }

  async fetchSearches() {
    const results = await Promise.allSettled([
      this.getRecentSearches(),
      this.getRecommendSearches(),
    ]);

    const [recentSearches, recommendSearches] = results.map((result) => {
      if (result.status === "fulfilled") {
        return result.value;
      }

      if (result.status === "rejected") {
        console.error(result.reason);

        return [];
      }
    });

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
    const url = `${BASE_URL}/recent/${id}`;
    const options = { method: "DELETE" };

    await fetchData(url, options);
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

    await this.requestDeleteRecentSearch(event.target);
    await this.fetchSearches();

    this.renderView(
      this.view.recentSearchView(this.model.getRecentSearches()) +
        this.view.recommendSearchView(this.model.getRecommendSearches())
    );
  }

  async handleSearchBarSubmit(event: Event, $searchInput: HTMLInputElement) {
    event.preventDefault();

    const url = `${BASE_URL}/recent`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: $searchInput.value }),
    };

    await fetchData(url, options);
    await this.fetchSearches();
    this.renderView(
      this.view.recentSearchView(this.model.getRecentSearches()) +
        this.view.recommendSearchView(this.model.getRecommendSearches())
    );

    $searchInput.value = "";
  }

  async handleSearchInputChange($searchInput: HTMLInputElement) {
    if (!$searchInput.value) {
      this.initSuggestionRender();

      return;
    }

    const searchInput = $searchInput.value;
    const SEARCHES_LIMIT = 10;
    const url = `${BASE_URL}/keyword?q=${searchInput}&_limit=${SEARCHES_LIMIT}`;

    const suggestions = await fetchData(url);

    this.model.setSearchSuggestions(suggestions);
    this.renderView(this.view.searchSuggestionView(this.model.getSearchSuggestions()));
  }

  setEvent() {
    const $searchInput = $(".search-bar__input");
    const $searchSuggestion = $(".search-suggestion");
    const $searchBar = $(".search-bar");

    if (!($searchInput instanceof HTMLInputElement)) {
      throw new Error(`element${$searchInput} is not HTMLInputElement`);
    }

    $searchInput.addEventListener("focus", () => {
      dim(Z_INDEX.NAV_BAR);
      showElement($searchSuggestion);
      this.initSuggestionRender();
    });

    $searchInput.addEventListener("blur", () => {
      undim();
      hideElement($searchSuggestion);
    });

    $searchSuggestion.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });

    $searchSuggestion.addEventListener("click", (e) => this.handleDeleteButtonClick(e));

    $searchInput.addEventListener("keydown", (event) =>
      this.handleSuggestionKeyDown(event, $searchSuggestion)
    );

    $searchBar.addEventListener("submit", (event) =>
      this.handleSearchBarSubmit(event, $searchInput)
    );

    $searchInput.addEventListener("input", () => this.handleSearchInputChange($searchInput));
  }
}
