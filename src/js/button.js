export function createButtonEl(text) {
  const btnEl = document.createElement("button");

  btnEl.className = "check-btn";
  btnEl.textContent = text;

  return btnEl;
}
