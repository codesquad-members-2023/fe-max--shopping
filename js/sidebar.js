export const initSideBar = () => {
  const sideBarLayer = document.querySelector('.side-bar');
  const sidebarOpenBtn = document.querySelector('.nav-sub__sidebar');
  const sidebarCloseBtn = document.querySelector('.side-bar__close-btn');
  const sideBarBackdrop = document.querySelector('.sidebar__backdrop');
  const hmenuCompressSection = document.querySelector('.hmenu__compress-section');
  const hmenuExpandBtn = document.querySelector('.hmenu__expand-btn');
  const hmenuCompressBtn = document.querySelector('.hmenu__compress-btn');

  sidebarOpenBtn.addEventListener('click', () => {
    sideBarLayer.style.transform = 'translate(0px)';
    sidebarCloseBtn.style.opacity = 1;
    sideBarBackdrop.classList.add('show');
  });

  sidebarCloseBtn.addEventListener('click', () => {
    sideBarLayer.style.transform = 'translate(-332px)';
    sidebarCloseBtn.style.opacity = 0;
    sideBarBackdrop.classList.remove('show');
  });

  hmenuExpandBtn.addEventListener('click', () => {
    hmenuCompressSection.classList.remove('compressed');
    hmenuCompressBtn.style.visibility = 'visible';
  });

  hmenuCompressBtn.addEventListener('click', () => {
    hmenuCompressSection.classList.add('compressed');
    hmenuCompressBtn.style.visibility = 'hidden';
  });
};
