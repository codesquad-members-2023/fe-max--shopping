export const debounce = (callback, delay) => {
  let timerId;
  return (event) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(callback, delay, event);
  };
};

export const highlightText = (keyword, matchingText) => {
  if (!matchingText) {
    return keyword;
  }
  const matchingRegex = new RegExp(matchingText, 'g');
  return keyword.replace(matchingRegex, `<span class="matching">${matchingText}</span>`);
};
