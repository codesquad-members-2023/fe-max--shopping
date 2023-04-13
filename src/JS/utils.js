export function $(select) {
  return document.querySelector(select);
}
export function $All(select) {
  return document.querySelectorAll(select);
}
export function dim(element) {
  $(element).classList.add('dim');
}
export function dimOff(element) {
  $(element).classList.remove('dim');
}
export function showLayer(select) {
  $(select).style.display = 'flex';
}
export function hideLayer(select) {
  $(select).style.display = 'none';
}
