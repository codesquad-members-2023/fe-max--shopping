const dim = document.querySelector('.dim');

export function handleDimming(isModalOn, isSearchLayerOn) {
  console.log(isModalOn, isSearchLayerOn);
  isModalOn || isSearchLayerOn
    ? dim.classList.remove('hidden')
    : dim.classList.add('hidden');
}
