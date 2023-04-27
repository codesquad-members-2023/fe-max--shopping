export function ShippingAddressRecipe() {
  return {
    tagName: "section",
    attrs: {
      id: "shipping-address",
      class: "group shipping-address",
    },
    children: [
      {
        tagName: "h2",
        attrs: {
          class: "blind",
        },
        textContent: "배송처",
      },
      {
        tagName: "dl",
        children: [
          {
            tagName: "dt",
            children: [
              {
                tagName: "span",
                attrs: {
                  class: "icon",
                  "aria-hidden": "true",
                },
                children: [
                  {
                    tagName: "img",
                    attrs: {
                      src: "./src/img/icon/location-small-white.svg",
                      alt: "지역",
                    },
                  },
                ],
              },

              {
                tagName: "span",
                textContent: "배송처",
              },
            ],
          },
          {
            tagName: "dd",
            children: [
              {
                tagName: "address",
                textContent: "대한민국",
              },
            ],
          },
        ],
      },
      {
        tagName: "dialog",
        attrs: {
          class: "popover",
        },
        children: [
          {
            tagName: "p",
            textContent:
              "KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.",
          },
          {
            tagName: "menu",
            attrs: {
              class: "popover__menu",
            },
            children: [
              {
                tagName: "button",
                attrs: {
                  class: "button",
                },
                textContent: "계속",
              },
              {
                tagName: "button",
                attrs: {
                  class: "button",
                },
                textContent: "주소 변경",
              },
            ],
          },
        ],
      },
    ],
  };
};