export function $(select) {
  return document.querySelector(select);
}
export function $All(select) {
  return document.querySelectorAll(select);
}
export function dimAndShowLayer(select) {
  dim();
  showLayer(select);
}
export function dimOffAndHideLayer(select) {
  dimOff();
  hideLayer(select);
}
function dim() {
  $('main').classList.add('dim');
}
function dimOff() {
  $('main').classList.remove('dim');
}
function showLayer(select) {
  $(select).style.display = 'flex';
}
function hideLayer(select) {
  $(select).style.display = 'none';
}
