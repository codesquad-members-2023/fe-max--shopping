import { Component } from '../../../core/Component.js';
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

    // $('.search-layer').addEventListener('click', event => {
    //   event.preventDefault();
    //   const clickedNode = event.target;
    //   switch (clickedNode.className) {
    //     case 'delete-btn':
    //       const historyValue = clickedNode.previousElementSibling.innerText;
    //       history = history.filter(keyword => keyword !== historyValue);
    //       clickedNode.parentNode.remove();
    //       break;
    //     case 'keyword-btn':
    //       const keywordValue = clickedNode.nextElementSibling.innerText;
    //       $('.search-bar').value = `${keywordValue}`;
    //       addHiddenClass('search-info');
    //       break;
    //   }
    // });
  }
}
