export function initSideBar() {
  // loadSidebarData();
  // renderSidebar();
  setSideBarEvent();
}

// function loadSidebarData() {
//  db.json에서 데이터를 비동기로 fetch해옴
// }

// function renderSidebar() {
//   makeTemplate();
// }

// function makeTemplate() {
//  json-server에서 받아온 데이터로 템플릿을 만들어줌
// }

function setSideBarEvent() {
  const sideBarLayer = document.querySelector('.side-bar');
  const sidebarOpenBtn = document.querySelector('.nav-sub__sidebar');
  const sidebarCloseBtn = document.querySelector('.side-bar__close-btn');
  const sideBarBackdrop = document.querySelector('.sidebar__backdrop');
  const hmenuCompressSection = document.querySelector('.hmenu__compress-section');
  const hmenuExpandBtn = document.querySelector('.hmenu__expand-btn');
  const hmenuCompressBtn = document.querySelector('.hmenu__compress-btn');
  const hmenuItem1 = document.querySelector('.hmenu__item[data-hmenu-id = "1"]');
  const hmenuSubLayer1 = document.querySelector('.hmenu__sub[data-hmenu-id = "1"]');
  const hmenuBackBtn = document.querySelector('.hmenu__back-btn');

  sidebarOpenBtn.addEventListener('click', () => {
    sideBarLayer.style.transform = 'translateX(0px)';
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

  hmenuItem1.addEventListener('click', () => {
    hmenuSubLayer1.style.transform = 'translateX(0%)';
  });

  hmenuBackBtn.addEventListener('click', () => {
    hmenuSubLayer1.style.transform = 'translateX(100%)';
  });
}
