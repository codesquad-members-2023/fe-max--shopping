export function FooterRecipe(state) {
  const { footerMenus } = state;
  return {
    tagName: "footer",
    attrs: {
      id: "footer",
    },
    children: [
      {
        tagName: "h1",
        attrs: {
          class: "blind",
        },
        textContent: "푸터",
      },
      {
        tagName: "a",
        attrs: {
          href: "#banner",
          class: "scroll-top",
        },
        textContent: "위로 돌아가기",
      },
      {
        tagName: "div",
        attrs: {
          class: "footer__menu-container",
        },
        children: [...footerMenus.map(FooterMenuRecipe)],
      },
      FooterInfoRecipe(state),
    ],
  };
}

export function FooterMenuRecipe({ title, items }) {
  return {
    tagName: "section",
    attrs: {
      class: "footer__menu",
      "aria-label": title,
    },
    children: [
      {
        tagName: "h2",
        textContent: title,
      },
      {
        tagName: "nav",
        children: [
          {
            tagName: "ul",
            attrs: {
              class: "footer__menu__list",
            },
            children: items.map(FooterMenuItemRecipe),
          },
        ],
      },
    ],
  };
};

export function FooterMenuItemRecipe ({ href, textContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "footer__menu__item",
    },
    children: [
      {
        tagName: "a",
        attrs: {
          href,
        },
        textContent,
      },
    ],
  };
};

export function FooterInfoRecipe ({ footerInfoItems }) {
  return {
    tagName: "div",
    attrs: {
      class: "footer__info",
    },
    children: [
      {
        tagName: "figure",
        attrs: {
          class: "footer__info__logo",
        },
        children: [
          {
            tagName: "img",
            attrs: {
              src: "./src/img/logo.svg",
              alt: "",
            },
          },
          {
            tagName: "figcaption",
            attrs: {
              class: "blind",
            },
            textContent: "아마존 로고",
          },
        ],
      },
      {
        tagName: "div",
        attrs: {
          class: "footer__info__inner",
        },
        children: [
          {
            tagName: "nav",
            children: [
              {
                tagName: "ul",
                attrs: {
                  class: "footer__info__list",
                },
                children: footerInfoItems.map(FooterInfoItemRecipe),
              },
            ],
          },
          {
            tagName: "address",
            attrs: {
              class: "footer__info__address",
            },
            textContent: "@ 1996-2023, Amazon.com, Inc. 또는 계열사",
          },
        ],
      },
    ],
  };
};

export function FooterInfoItemRecipe ({ href, textContent }) {
  return {
    tagName: "li",
    attrs: {
      class: "footer__info__item",
    },
    children: [
      {
        tagName: "a",
        attrs: {
          href,
        },
        textContent,
      },
    ],
  };
};
