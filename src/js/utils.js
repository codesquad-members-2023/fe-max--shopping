const $ = selector => document.querySelector(selector);

const addHiddenClass = modalName => {
  $(`.${modalName}`).classList.add('hidden');
};

const removeHiddenClass = modal => {
  $(`.${modal}`).classList.remove('hidden');
};

const addDimmedClass = nodeID => {
  $(`#${nodeID}`).classList.add('dimmed');
};

const removeDimmedClass = nodeID => {
  $(`#${nodeID}`).classList.remove('dimmed');
};

const saveAtLocalStorage = (key, value) => {
  const storage = window.localStorage;
  storage.setItem(key, value);
};

const loadAtLocalStorage = key => {
  const storage = window.localStorage;
  storage.getItem(key);
};

export {
  $,
  addHiddenClass,
  removeHiddenClass,
  addDimmedClass,
  removeDimmedClass,
  saveAtLocalStorage,
  loadAtLocalStorage,
};
