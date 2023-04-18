import { $, $All, dimAndShowLayer, dimOffAndHideLayer } from '../utils.js';
let count = -1;

export function toggleSuggestLayer() {
  selectEventShowLayer('.searchbar__input', 'focus', '.searchbar__suggest');
  selectEventHideLayer('.searchbar__input', 'blur', '.searchbar__suggest');
}
function selectEventShowLayer(target, event, showElement) {
  $(target).addEventListener(event, function (e) {
    dimAndShowLayer(showElement);
  });
}
function selectEventHideLayer(target, event, hideElement) {
  $(target).addEventListener(event, function (e) {
    dimOffAndHideLayer(hideElement);
    $('.focus').classList.remove('focus');
    count = -1;
  });
}

export function moveFocusSuggest() {
  const mainSearchbar = $('.main__searchbar');
  const input = $('.searchbar__input');
  const suggestEls = $('.searchbar__suggest').children;
  const minCount = 0;
  const maxCount = suggestEls.length - 1;
  input.addEventListener('keydown', function (e) {
    e.preventDefault();
    const isArrowUp = e.key === 'ArrowUp';
    const isArrowDown = e.key === 'ArrowDown';
    if (isArrowUp && count === -1) {
      count = maxCount;
      suggestEls[count].classList.add('focus');
    } else if (isArrowUp && count === 0) {
      count = maxCount;
    } else if (isArrowUp) {
      count--;
    } else if (isArrowDown && count === 14) {
      count = minCount;
    } else if (isArrowDown) {
      count++;
    }
    console.log(count);
  });
  mainSearchbar.addEventListener('keydown', function (e) {
    const isArrowUp = e.key === 'ArrowUp';
    const isArrowDown = e.key === 'ArrowDown';
    switch (isArrowUp) {
      case isArrowUp && count === 14:
        suggestEls[0].classList.remove('focus');
        suggestEls[count].classList.add('focus');
        input.value = suggestEls[count].textContent.trim();
        break;

      case isArrowUp && count <= 13:
        suggestEls[count + 1].classList.remove('focus');
        suggestEls[count].classList.add('focus');
        input.value = suggestEls[count].textContent.trim();
        break;
    }
    switch (isArrowDown) {
      case isArrowDown && count === 0:
        suggestEls[14].classList.remove('focus');
        suggestEls[count].classList.add('focus');
        input.value = suggestEls[count].textContent.trim();
        break;

      case isArrowDown && count >= 1:
        suggestEls[count - 1].classList.remove('focus');
        suggestEls[count].classList.add('focus');
        input.value = suggestEls[count].textContent.trim();
        break;
    }
  });
}
