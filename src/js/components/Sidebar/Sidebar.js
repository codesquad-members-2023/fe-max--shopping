export const getData = () => {
  fetch('http://localhost:3000/side-bar')
    .then(response => response.json())
    .then(json => renderSidebar(json));
};

const titleTemplate = title => {
  return `
        <li class="contents-category__title">
            <span>${title}</span>
        </li>`;
};

const listTemplate = list => {
  return `
          <li>
              <a class="contents-category__list" href="#">
                  <span>${list}</span>
                  <img src="./src/asset/icons/chevron-right.svg" alt="" />
              </a>
          </li>`;
};

const renderSidebar = json => {
  for (const menu of json) {
    const sidebar = document.querySelector('.contents-category');
    const contents = menu.contents;
    sidebar.insertAdjacentHTML('beforeend', titleTemplate(menu.title));
    for (const list of contents) {
      sidebar.insertAdjacentHTML('beforeend', listTemplate(list));
    }
  }
};
