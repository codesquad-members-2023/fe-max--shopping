const init = () => {
  inputFocusShowSuggest();
};

const inputFocusShowSuggest = () => {
  const searchBarInput = document.querySelector('.searchbar__input');
  console.log(searchBarInput);
  searchBarInput.addEventListener('focus', function (e) {
    const select = e.target.closest('.main__searchbar');
    const ul = select.querySelector('ul');
    ul.classList.add('searchbar__suggest');
    dimOnAndOff('searchbar__suggest');
  });
};

const dimOnAndOff = (className) => {
  dimOn();
  dimOff(className);
};

const dimOn = () => {
  const dim = document.querySelector('#dim');
  dim.classList.add('dim');
};

const dimOff = (id) => {
  const dim = document.querySelector('#dim');
  const targetClassName = document.querySelector(`#${id}`);
  dim.addEventListener('click', function () {
    targetClassName.classList.remove(id);
    dim.classList.remove('dim');
  });
};

window.addEventListener('DOMContentLoaded', init);
