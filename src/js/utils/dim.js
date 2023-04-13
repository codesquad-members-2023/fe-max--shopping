const dim = document.querySelector('.dim');

export const layerOpenState = {
  modal: false,
  searchPanel: false,
};

export function handleDimming() {
  layerOpenState.modal || layerOpenState.searchPanel
    ? dim.classList.remove('hidden')
    : dim.classList.add('hidden');
}
