import { MainHeroSlideRecipe } from "./MainHeroSlideRecipe.js";

export function MainHeroRecipe({ mainHeroSlides }) {
  return {
    tagName: "section",
    attrs: {
      id: "hero",
    },
    children: [
      {
        tagName: "h2",
        attrs: {
          class: "blind",
        },
        textContent: "히어로 영역",
      },
      {
        tagName: "ul",
        attrs: {
          class: "hero__wrapper wrapper",
        },
        children: mainHeroSlides.map(MainHeroSlideRecipe),
      },
      {
        tagName: "button",
        attrs: {
          class: "control control--left",
        },
        children: [
          {
            tagName: "span",
            attrs: {
              class: "icon",
            },
            children: [
              {
                tagName: "img",
                attrs: {
                  src: "./src/img/arrow-left.svg",
                  alt: "이전",
                },
              },
            ],
          },
        ],
      },
      {
        tagName: "button",
        attrs: {
          class: "control control--right",
        },
        children: [
          {
            tagName: "span",
            attrs: {
              class: "icon",
            },
            children: [
              {
                tagName: "img",
                attrs: {
                  src: "./src/img/arrow-right.svg",
                  alt: "다음",
                },
              },
            ],
          },
        ],
      },
    ],
  };
}
