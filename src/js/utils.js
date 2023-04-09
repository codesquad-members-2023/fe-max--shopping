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

export { $, addHiddenClass, removeHiddenClass, addDimmedClass, removeDimmedClass };
