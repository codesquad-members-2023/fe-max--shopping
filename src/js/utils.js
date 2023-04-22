export const $ = selector => document.querySelector(selector);

export const addHiddenClass = selector => {
  $(`${selector}`).classList.add('hidden');
};

export const removeHiddenClass = selector => {
  $(`${selector}`).classList.remove('hidden');
};

export const addDimmed = () => {
  $('#main').classList.add('dimmed');
};

export const removeDimmed = () => {
  $('#main').classList.remove('dimmed');
};
