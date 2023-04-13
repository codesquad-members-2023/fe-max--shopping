export class Recipe {
  constructor(state) {
    this.state = state
  }

  app = () => {
    const { header, sidebar, main, footer } = this;
    return {
      header: header(),
      sidebar: sidebar(),
      main: main(),
      footer: footer(),
    };
  };

  header = () => {
    const {
      logo,
      shippingAddress,
      search,
      nation,
      login,
      mypage,
      cart,
      navbar,
    } = this;
    return {
      tagName: "header",
      attrs: {
        id: "banner",
      },
      children: [
        {
          tagName: "div",
          attrs: {
            class: "inner",
          },
          children: [
            logo(),
            shippingAddress(),
            search(),
            nation(),
            login(),
            mypage(),
            cart(),
          ],
        },
        navbar(),
      ],
    };
  };

  logo = () => {
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

  shippingAddress = () => {
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
          attrs: {
            tabindex: 0,
          },
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

  search = () => {
    const { keywordList, keywords} = this
    return {
      tagName: "section",
      attrs: {
        id: "search",
        class: "group search",
      },
      children: [
        {
          tagName: "h2",
          attrs: {
            class: "blind",
          },
          textContent: "검색",
        },
        {
          tagName: "form",
          attrs: {
            class: "search__form",
          },
          children: [
            {
              tagName: "fieldset",
              attrs: {
                class: "search__keyword-field",
              },
              children: [
                {
                  tagName: "input",
                  attrs: {
                    type: "text",
                    id: "keyword",
                    name: "keyword",
                    placeholder: "검색 Amazon",
                    autocomplete: "off",
                  },
                },
                keywordList()
              ],
            },
            {
              tagName: "button",
              attrs: {
                type: "submit",
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
                        src: "./src/img/icon/search.svg",
                        alt: "검색",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        keywords()
      ],
    };
  };

  keywordList = () => {
    return {
      tagName: "datalist",
      attrs: {
        id: "keyword-list"
      },
    }
  }

  keywordListItem = (keyword) => {
    return {
      tagName: "option",
      attrs: {
        value: keyword,
        disabled: true
      },
      textContent: keyword
    }
  }

  keywords = () => {
    return {
      tagName: "article",
      attrs: {
        id: "keywords",
        class: "keywords"
      },
      children: [
        {
          tagName: "h3",
          attrs: {
            class: "blind"
          },
          textContent: "검색어들"
        },
        {
          tagName: "ul",
          attrs: {
            class: "keywords__list"
          },
        }
      ]
    }
  }

  keywordsItem = ({index, children}) => {
    return {
      tagName: "li",
      attrs: {
        class: "keywords__item",
        "data-index": index,
        style: `--y: ${index}`
      },
      children: [
        {
          tagName: "button",
          children
        },
      ]
    }
  }

  keywordsLogItem = ({index, textContent}) => {
    return {
      tagName: "li",
      attrs: {
        class: "keywords__item",
        style: `--y: ${index}`
      },
      children: [
        {
          tagName: "button",
          textContent
        },
        {
          tagName: "input",
          attrs: {
            type: "image",
            class: "delete",
            src: "./src/img/icon/close.svg",
            alt: "기록 삭제"            
          },
        },
      ]
    }
  }
  
  keywordsRecommendItem = ({index, textContent}) => {
    return {
      tagName: "li",
      attrs: {
        class: "keywords__item",
        "data-index": index,
        style: `--y: ${index}`
      },
      children: [
        {
          tagName: "button",
          attrs: {
            class: "recommend"
          },
          textContent
        }
      ]
    }
  }

  nation = () => {
    return {
      tagName: "section",
      attrs: {
        class: "group nation",
        tabindex: "0",
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

  mypage = () => {
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

  login = () => {
    const { loginAccountSub } = this;
    const { loginAccountSubs } = this.state;
    return {
      tagName: "section",
      attrs: {
        id: "login",
        class: "group login",
      },
      children: [
        {
          tagName: "h2",
          attrs: {
            class: "blind",
          },
          textContent: "로그인",
        },
        {
          tagName: "p",
          textContent: "안녕하세요, 로그인",
        },
        {
          tagName: "a",
          attrs: {
            href: "#",
          },
          textContent: "계정 및 목록",
        },
        {
          tagName: "dialog",
          attrs: {
            class: "popover",
          },
          children: [
            {
              tagName: "button",
              attrs: {
                class: "button button--lg",
              },
              textContent: "로그인",
            },
            {
              tagName: "p",
              textContent: "기존 사용자가 아니십니까? ",
              children: [
                {
                  tagName: "a",
                  attrs: {
                    href: "#",
                  },
                  textContent: "여기에서 시작합니다.",
                },
              ],
            },
            {
              tagName: "hr",
            },
            {
              tagName: "article",
              attrs: {
                class: "account",
              },
              children: [
                {
                  tagName: "h3",
                  attrs: {
                    class: "blind",
                  },
                  textContent: "정보",
                },
                ...loginAccountSubs.map(loginAccountSub),
              ],
            },
          ],
        },
      ],
    };
  };

  loginAccountSub = ({ title, items }) => {
    const { loginAccountSubItem } = this;
    return {
      tagName: "section",
      attrs: {
        class: "account__sub",
      },
      children: [
        {
          tagName: "h4",
          textContent: title,
        },
        {
          tagName: "nav",
          children: [
            {
              tagName: "ul",
              children: items.map(loginAccountSubItem),
            },
          ],
        },
      ],
    };
  };

  loginAccountSubItem = ({ href, textContent }) => {
    return {
      tagName: "li",
      attrs: {
        class: "account__item",
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

  cart = () => {
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

  navbar = () => {
    const { navbarListItem } = this;
    const { navbarItems } = this.state;
    return {
      tagName: "div",
      attrs: {
        id: "navbar",
      },
      children: [
        {
          tagName: "nav",
          attrs: {
            class: "left",
          },
          children: [
            {
              tagName: "ul",
              attrs: {
                class: "navbar__list",
              },
              children: [
                {
                  tagName: "li",
                  attrs: {
                    class: "navbar__item",
                  },
                  children: [
                    {
                      tagName: "button",
                      attrs: {
                        id: "sidebar-trigger",
                        class: "sidebar-trigger",
                      },
                      children: [
                        {
                          tagName: "img",
                          attrs: {
                            src: "./src/img/icon/menu-white.svg",
                            alt: "사이드바 열기",
                          },
                        },
                        {
                          tagName: "span",
                          textContent: "모두",
                        },
                      ],
                    },
                  ],
                },
                ...navbarItems.map(navbarListItem),
              ],
            },
          ],
        },
        {
          tagName: "a",
          attrs: {
            href: "#",
            class: "right",
          },
          textContent: "지금 특가 상품 쇼핑하기",
        },
      ],
    };
  };

  navbarListItem = ({ href, textContent }) => {
    return {
      tagName: "li",
      attrs: {
        class: "navbar__item",
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

  sidebar = () => {
    const { sidebarSub } = this;
    const { sidebarSubs } = this.state;
    return {
      tagName: "article",
      attrs: {
        id: "sidebar",
      },
      children: [
        {
          tagName: "h1",
          attrs: {
            class: "blind",
          },
          textContent: "사이드바 영역",
        },
        {
          tagName: "aside",
          attrs: {
            tabindex: "-1",
          },
          children: [
            {
              tagName: "h2",
              attrs: {
                tabindex: "-1",
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
                        src: "./src/img/icon/user-white.svg",
                        alt: "손님",
                      },
                    },
                  ],
                },
                {
                  tagName: "span",
                  textContent: "ㅤ안녕하세요 로그인",
                },
              ],
            },
            ...sidebarSubs.map(sidebarSub),
          ],
        },
      ],
    };
  };

  sidebarSub = ({ title, items, all }) => {
    const { sidebarSubItem, sidebarSubAll } = this;
    return {
      tagName: "article",
      children: [
        {
          tagName: "h3",
          textContent: title,
        },
        {
          tagName: "ul",
          attrs: {
            class: "sidebar__sub",
          },
          children: [
            ...items.map(sidebarSubItem),
            all ? sidebarSubAll(all) : null,
          ].filter((v) => v),
        },
      ],
    };
  };

  sidebarSubAll = (all) => {
    const { sidebarSubItem } = this;
    return {
      tagName: "li",
      children: [
        {
          tagName: "details",
          attrs: {
            class: "sidebar__details",
            tabindex: "-1",
          },
          children: [
            {
              tagName: "summary",
              attrs: {
                class: "sidebar__item sidebar__item--summary",
                tabindex: "-1",
              },
              children: [
                {
                  tagName: "span",
                  textContent: "모두보기ㅤ",
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
                        src: "./src/img/icon/chevron-down.svg",
                        alt: "열기",
                      },
                    },
                  ],
                },
              ],
            },
            {
              tagName: "ul",
              children: all.map(sidebarSubItem),
            },
          ],
        },
      ],
    };
  };

  sidebarSubItem = ({ textContent }) => {
    return {
      tagName: "li",
      children: [
        {
          tagName: "button",
          attrs: {
            class: "sidebar__item",
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
                    alt: "자세히 보기",
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  };

  main = () => {
    const { mainBg, mainHero, mainContents } = this;
    return {
      tagName: "main",
      attrs: {
        id: "main",
      },
      children: [
        {
          tagName: "h1",
          attrs: {
            class: "blind",
          },
          textContent: "메인",
        },
        {
          tagName: "div",
          attrs: {
            class: "dimmed",
          },
        },
        mainBg(),
        {
          tagName: "div",
          attrs: {
            class: "inner",
          },
          children: [mainHero(), mainContents()],
        },
      ],
    };
  };

  mainBg = () => {
    return {
      tagName: "figure",
      attrs: {
        class: "bg",
      },
      children: [
        {
          tagName: "img",
          attrs: {
            src: "./src/img/Image.png",
            alt: "배경이미지",
          },
        },
        {
          tagName: "figcaption",
          attrs: {
            class: "blind",
          },
          textContent: "배경이미지",
        },
      ],
    };
  };

  mainHero = () => {
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
          children: [
            {
              tagName: "li",
              children: [
                {
                  tagName: "article",
                  attrs: {
                    class: "hero__slide slide",
                    tabindex: "0",
                  },
                  children: [
                    {
                      tagName: "h3",
                      textContent:
                        "해외 쇼핑을 즐기고 한국 직불 카드 또는 한국 신용카드로 결제하십시오",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tagName: "button",
          attrs: {
            class: "hero__control hero__control--left",
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
            class: "hero__control hero__control--right",
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
  };

  mainContents = () => {
    const { mainContentsItem } = this;
    const { mainContentsItems } = this.state;
    return {
      tagName: "section",
      attrs: {
        id: "contents",
      },
      children: [
        {
          tagName: "h2",
          attrs: {
            class: "blind",
          },
          textContent: "콘텐츠 영역",
        },
        {
          tagName: "ul",
          attrs: {
            class: "contents__list",
          },
          children: [
            {
              tagName: "li",
              attrs: {
                class: "contents__item",
              },
              children: [
                {
                  tagName: "article",
                  attrs: {
                    class: "contents__card",
                    tabindex: "0",
                    "aria-label": "최상의 경험을 위해 로그인하세요",
                  },
                  children: [
                    {
                      tagName: "a",
                      attrs: {
                        href: "#",
                        class: "contents__login-link button button--lg",
                      },
                      textContent: "로그인",
                    },
                    {
                      tagName: "h3",
                      textContent: "최상의 경험을 위해 로그인하세요",
                    },
                  ],
                },
              ],
            },
            ...mainContentsItems.map(mainContentsItem),
          ],
        },
      ],
    };
  };

  mainContentsItem = ({ title, src, href, linkTextContent }) => {
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
            tabindex: "0",
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
  };

  footer = () => {
    const { footerMenu, footerInfo } = this;
    const { footerMenus } = this.state;
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
          children: [...footerMenus.map(footerMenu)],
        },
        footerInfo()
      ],
    };
  };

  footerMenu = ({ title, items }) => {
    const { footerMenuItem } = this;
    return {
      tagName: "section",
      attrs: {
        class: "footer__menu",
        tabindex: "0",
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
              children: items.map(footerMenuItem),
            },
          ],
        },
      ],
    };
  };

  footerMenuItem = ({ href, textContent }) => {
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

  footerInfo = () => {
    const { footerInfoItem } = this;
    const { footerInfoItems } = this.state;
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
            tabindex: "0",
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
                  children: footerInfoItems.map(footerInfoItem),
                },
              ],
            },
            {
              tagName: "address",
              attrs: {
                class: "footer__info__address",
                tabindex: "0",
              },
              textContent: "@ 1996-2023, Amazon.com, Inc. 또는 계열사",
            },
          ],
        },
      ],
    };
  };

  footerInfoItem = ({ href, textContent }) => {
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
}
