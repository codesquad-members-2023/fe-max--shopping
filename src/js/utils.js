export const $ = (selector, node = document) => node.querySelector(selector);

export const addHiddenClass = node => {
  node.classList.add('hidden');
};

export const removeHiddenClass = node => {
  node.classList.remove('hidden');
};

export const addDimmed = () => {
  $('#main').classList.add('dimmed');
};

export const removeDimmed = () => {
  $('#main').classList.remove('dimmed');
};
