import { Component } from '../../Core/Component.js';
import { $, addDimmed, removeDimmed, addHiddenClass, removeHiddenClass } from '../../Utils.js';

export class SearchBarView extends Component {
  getTemplate() {
    return `            
        <input class="search-bar" placeholder="검색 Amazon" type="text" />
        <button class="search-btn" type="submit">
            <img src="src/asset/icons/search.svg" alt="" />
        </button>
        <ul class="search-layer hidden"></ul>`;
  }

  update(isFocus) {
    if (isFocus) {
      this.openSearchLayer();
    } else {
      this.closeSearchLayer();
    }
  }

  openSearchLayer() {
    addDimmed();
    $('.login-modal__small').classList.remove('active');
    $('.search-layer').classList.remove('hidden');
  }

  closeSearchLayer() {
    removeDimmed();
    removeHiddenClass($('.login-modal__small'));
    addHiddenClass($('.search-layer'));
  }
}
