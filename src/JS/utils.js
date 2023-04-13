export function $(select) {
  return document.querySelector(select);
}
export function $All(select) {
  return document.querySelectorAll(select);
}
export function dim() {
  $('main').classList.add('dim');
}
export function dimOff() {
  $('main').classList.remove('dim');
}
export function showLayer(select) {
  $(select).style.display = 'flex';
}
export function hideLayer(select) {
  $(select).style.display = 'none';
}
export function selectEventShowLayer(target, event, showElement) {
  $(target).addEventListener(event, function (e) {
    showLayer(showElement);
    dim();
  });
}
export function selectEventHideLayer(event, hideElement) {
  $('main').addEventListener(event, function (e) {
    hideLayer(hideElement);
    dimOff();
  });
}
