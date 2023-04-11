export const $ = (selector, context = document) => {
  const $element = context.querySelector(selector);
  if ($element === null) {
    throw new Error(`선택자 ${selector}에 해당되는 요소를 찾을 수 없습니다`);
  }
  return $element;
};

export const $context = (context = document) => {
  return (selector) => $(selector, context);
};

export const debounce = (callback, delay) => {
  let timerId;
  return (event) => {
    clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};
