export const template = {
  mainTitle(title) {
    return `<div class="title">${title}</div>`;
  },

  mainCategoryList(items) {
    return `
      <ul class="lists">
        ${items
          .map(
            (item) =>
              `<li class="item"><a href="#">${item}</a><img src="./src/assets/images/icn_chevron_right.svg" alt="" /></li>`,
          )
          .join('')}
      </ul>
    `;
  },

  mainExtendCategoryList(items) {
    return `
      <ul class="lists">
        ${items
          .map(
            (item) =>
              `<li class="item"><a href="#">${item}</a><img src="./src/assets/images/icn_chevron_right.svg" alt="" /></li>`,
          )
          .join('')}
      </ul>
    `;
  },

  subCategoryList(items) {
    return `
      <ul class="lists">
        ${items
          .map((item) => `<li class="item"><a href="#">${item}</a></li>`)
          .join('')}
      </ul>
    `;
  },
};
