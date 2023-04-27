export function CartRecipe() {
  return {
    tagName: "section",
    attrs: {
      class: "group cart",
    },
    children: [
      {
        tagName: "h2",
        attrs: {
          class: "blind",
        },
      },
      {
        tagName: "a",
        attrs: {
          href: "#",
        },
        children: [
          {
            tagName: "img",
            attrs: {
              src: "./src/img/icon/cart-orange.svg",
              alt: "",
            },
          },
          {
            tagName: "span",
            textContent: "장바구니",
          },
        ],
      },
    ],
  };
};