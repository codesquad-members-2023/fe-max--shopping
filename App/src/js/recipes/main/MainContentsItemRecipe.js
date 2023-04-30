export function MainContentsItemRecipe({ title, src, href, linkTextContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "contents__item",
    },
    children: [
      {
        tagName: "article",
        attrs: {
          class: "contents__card",
          "aria-label": title,
        },
        children: [
          {
            tagName: "figure",
            attrs: {
              class: "contents__card_img",
            },
            children: [
              {
                tagName: "img",
                attrs: {
                  src,
                  alt: "",
                },
              },
              {
                tagName: "figcaption",
                attrs: {
                  class: "blind",
                },
                textContent: "더미이미지",
              },
            ],
          },
          {
            tagName: "div",
            attrs: {
              class: "contents__card_text",
            },
            children: [
              {
                tagName: "h3",
                textContent: title,
              },
              {
                tagName: "a",
                attrs: {
                  class: "more",
                  href,
                },
                textContent: linkTextContent,
              },
            ],
          },
        ],
      },
    ],
  };
}
