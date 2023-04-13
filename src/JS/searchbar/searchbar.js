import { selectEventShowLayer, selectEventHideLayer } from '../utils.js';

export function focusInputShowAndHideLayer() {
  selectEventShowLayer('.searchbar__input', 'focus', '.searchbar__suggest');
  selectEventHideLayer('click', '.searchbar__suggest');
}
