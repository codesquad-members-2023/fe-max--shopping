const dim = document.querySelector('.dim');

export const modalState = {
  on: false,
  searchModal: false,
};

export function handleDimming() {
  modalState.on || modalState.searchModal
    ? dim.classList.remove('hidden')
    : dim.classList.add('hidden');
}
