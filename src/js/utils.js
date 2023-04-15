export const $ = selector => document.querySelector(selector);

export const addHiddenClass = modalName => {
  $(`.${modalName}`).classList.add('hidden');
};

export const removeHiddenClass = modal => {
  $(`.${modal}`).classList.remove('hidden');
};

export const addDimmed = () => {
  $('#main').classList.add('dimmed');
};

export const removeDimmed = () => {
  $('#main').classList.remove('dimmed');
};
