export function SidebarSubItemRecipe({ textContent }, i) {
  return {
    tagName: "li",
    children: [
      {
        tagName: "button",
        attrs: {
          class: "sidebar__item",
          "data-detail-index": i,
          tabindex: "-1",
        },
        children: [
          {
            tagName: "span",
            textContent,
          },
          {
            tagName: "span",
            attrs: {
              class: "icon",
            },
            children: [
              {
                tagName: "img",
                attrs: {
                  src: "./src/img/icon/chevron-right.svg",
                  alt: `${textContent} 자세히 보기`,
                },
              },
            ],
          },
        ],
      },
    ],
  };
}