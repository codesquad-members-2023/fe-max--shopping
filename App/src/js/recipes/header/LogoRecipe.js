export function LogoRecipe () {
  return {
    tagName: "section",
    attrs: {
      class: "group logo",
    },
    children: [
      {
        tagName: "h2",
        attrs: {
          class: "blind",
        },
        textContent: "로고",
      },
      {
        tagName: "a",
        attrs: { href: "#" },
        children: [
          {
            tagName: "img",
            attrs: {
              src: "./src/img/logo.svg",
              alt: "아마존",
            },
          },
        ],
      },
    ],
  };
};
