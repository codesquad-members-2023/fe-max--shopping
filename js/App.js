import Fetcher from './util/Fetcher.js';
import { SearchModel } from './Header/SearchBar/SearchModel.js';
import { SearchController } from './Header/SearchBar/SearchController.js';
import { SearchBar } from './Header/SearchBar/SearchBar.js';
import { SearchLayer } from './Header/SearchBar/SearchLayer.js';
import SliderModel from './Hero/SliderModel.js';
import SliderController from './Hero/SliderController.js';
import Slider from './Hero/Slider.js';

export class App {
  constructor() {
    const searchModel = new SearchModel();
    const searchBarView = new SearchBar(document.querySelector('.search-bar'));
    const searchLayerView = new SearchLayer(document.querySelector('.search-bar__layer'));
    const searchController = new SearchController(searchModel, searchBarView, searchLayerView, Fetcher);

    const sliderModel = new SliderModel();
    const sliderView = new Slider(document.querySelector('.hero'));
    const sliderController = new SliderController(sliderModel, sliderView, Fetcher);
  }
}
