export function KeywordsLogItemRecipe ({ index, textContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "keywords__item",
      style: `--y: ${index}`,
    },
    children: [
      {
        tagName: "button",
        attrs: {
          tabindex: "-1",
        },
        children: [
          {
            tagName: "strong",
            textContent,
          },
        ],
      },
      {
        tagName: "input",
        attrs: {
          type: "image",
          class: "delete",
          src: "./src/img/icon/close.svg",
          alt: "기록 삭제",
          tabindex: -1,
        },
      },
    ],
  };
};