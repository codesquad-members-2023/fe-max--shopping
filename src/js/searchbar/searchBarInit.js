import { Model } from './searchBarModel.js';
import { View } from './searchBarView.js';
import { SearchBar } from './searchBar.js';
import { JsonData, ApiData, LocalStorageData } from './dataFetcher.js';

const SEARCH_RECOMMEND_JSON_URL = 'http://localhost:4000/recommend';
const AMAZON_COMPLETION_API_URL =
  'https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=aps&prefix=';
const LOCAL_STORAGE_KEY = 'searchHistory';

const Data = {
  auto: new ApiData(AMAZON_COMPLETION_API_URL),
  recommend: new JsonData(SEARCH_RECOMMEND_JSON_URL),
  history: new LocalStorageData(LOCAL_STORAGE_KEY),
};
class SearchBarInit {
  constructor() {
    this.model = new Model(Data);
    this.view = new View();
    this.searchBar = new SearchBar(this.model, this.view);
  }
}

const searchBarInit = new SearchBarInit();
