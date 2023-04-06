export function createButtonEl(text) {
  const btnEl = document.createElement("button");
  const spanEl = document.createElement("span");

  btnEl.className = "check-btn";
  spanEl.textContent = text;
  
  btnEl.appendChild(spanEl);

  return btnEl;
}
