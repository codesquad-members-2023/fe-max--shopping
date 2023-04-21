const dim = document.querySelector('.dim');

export const layerOpenState = {
  modal: false,
  searchPanel: false,
  sidebar: false,
};

export function handleDimming() {
  layerOpenState.modal || layerOpenState.searchPanel || layerOpenState.sidebar
    ? dim.classList.remove('hidden')
    : dim.classList.add('hidden');
}
