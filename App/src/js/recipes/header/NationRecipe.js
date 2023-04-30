export function NationRecipe () {
  return {
    tagName: "section",
    attrs: {
      class: "group nation",
      "aria-label": "지역: 한국",
    },
    children: [
      {
        tagName: "h2",
        attrs: {
          class: "blind",
        },
        textContent: "지역",
      },
      {
        tagName: "figure",
        children: [
          {
            tagName: "img",
            attrs: {
              src: "./src/img/flag/ko.png",
              alt: "",
            },
          },
          {
            tagName: "figcaption",
            textContent: "KO",
          },
        ],
      },
    ],
  };
};