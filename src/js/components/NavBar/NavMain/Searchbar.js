import { Component } from '../../../Core/Component.js';
import { $, addDimmed, addHiddenClass, removeHiddenClass } from '../../../utils.js';

export class Searchbar extends Component {
  getTemplate() {
    const template = `            
        <input class="search-bar" placeholder="검색 Amazon" type="text" />
        <button class="search-btn" type="submit">
            <img src="src/asset/icons/search.svg" alt="" />
        </button>`;
    return template;
  }

  setEvent() {
    $('.search-bar').addEventListener('focus', () => {
      addDimmed();
      addHiddenClass('.login-modal__small');
      removeHiddenClass('.search-layer');
    });
  }
}
