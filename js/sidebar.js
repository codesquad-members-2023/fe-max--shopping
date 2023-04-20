export const initSideBar = () => {
  const sideBarLayer = document.querySelector('.side-bar');
  const sidebarOpenBtn = document.querySelector('.nav-sub__sidebar');
  const sidebarCloseBtn = document.querySelector('.side-bar__close-btn');
  const sideBarLayerContainer = document.querySelector('.side-bar__detail-container');
  const sideBarBackdrop = document.querySelector('.sidebar__backdrop');

  sidebarOpenBtn.addEventListener('click', () => {
    sideBarLayer.style.transform = 'translate(0px)';
    sideBarLayerContainer.classList.add('show');
    sidebarCloseBtn.style.opacity = 1;
    sideBarBackdrop.classList.add('show');
  });

  sidebarCloseBtn.addEventListener('click', () => {
    sideBarLayer.style.transform = 'translate(-332px)';
    sideBarLayerContainer.classList.remove('show');
    sidebarCloseBtn.style.opacity = 0;
    sideBarBackdrop.classList.remove('show');
  });
};
