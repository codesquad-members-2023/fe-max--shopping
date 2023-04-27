export function MyPageRecipe () {
  return {
    tagName: "section",
    attrs: {
      class: "group mypage",
    },
    children: [
      {
        tagName: "h2",
        attrs: {
          "aria-hidden": "true",
        },
        children: [
          {
            tagName: "span",
            textContent: "반품",
          },
          {
            tagName: "span",
            attrs: {
              class: "blind",
            },
            textContent: "& 주문",
          },
        ],
      },
      {
        tagName: "a",
        attrs: {
          href: "#",
        },
        children: [
          {
            tagName: "span",
            attrs: {
              class: "blind",
            },
            textContent: "반품",
          },
          {
            tagName: "span",
            textContent: "& 주문",
          },
        ],
      },
    ],
  };
};