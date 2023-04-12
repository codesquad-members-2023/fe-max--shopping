export function viewData() {
  return {
    header: {
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
            {
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
            },
            {
              tagName: "section",
              attrs: {
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
            },
            {
              tagName: "section",
              attrs: {
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
                    action: "post",
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
              ],
            },
            {
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
            },
            {
              tagName: "section",
              attrs: {
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
                        {
                          tagName: "section",
                          attrs: {
                            class: "account__sub",
                          },
                          children: [
                            {
                              tagName: "h4",
                              textContent: "귀하의 목록",
                            },
                            {
                              tagName: "nav",
                              children: [
                                {
                                  tagName: "ul",
                                  children: [
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "목록 생성",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent:
                                            "목록 또는 레지스트리 찾기",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent:
                                            "AmazonSmile 자선 품목 목록",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tagName: "section",
                          attrs: {
                            class: "account__sub",
                          },
                          children: [
                            {
                              tagName: "h4",
                              textContent: "계정",
                            },
                            {
                              tagName: "nav",
                              children: [
                                {
                                  tagName: "ul",
                                  children: [
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "계정",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent:
                                            "목록 또는 레지스트리 찾기",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "권장 사항",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "검색 기록",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "위치리스트",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "비디오 구매 및 대여",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "Kindle 언리미티드",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "콘텐츠 및 기기",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "항목 구독 및 저장",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "멤버십 및 구독",
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "li",
                                      attrs: {
                                        class: "account__item",
                                      },
                                      children: [
                                        {
                                          tagName: "a",
                                          attrs: {
                                            href: "#",
                                          },
                                          textContent: "음악 라이브러리",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
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
            },
            {
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
            },
          ],
        },
        {
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
                    {
                      tagName: "li",
                      attrs: {
                        class: "navbar__item",
                      },
                      children: [
                        {
                          tagName: "a",
                          attrs: {
                            href: "#",
                          },
                          textContent: "오늘의 딜",
                        },
                      ],
                    },
                    {
                      tagName: "li",
                      attrs: {
                        class: "navbar__item",
                      },
                      children: [
                        {
                          tagName: "a",
                          attrs: {
                            href: "#",
                          },
                          textContent: "고객 서비스",
                        },
                      ],
                    },
                    {
                      tagName: "li",
                      attrs: {
                        class: "navbar__item",
                      },
                      children: [
                        {
                          tagName: "a",
                          attrs: {
                            href: "#",
                          },
                          textContent: "레지스트리",
                        },
                      ],
                    },
                    {
                      tagName: "li",
                      attrs: {
                        class: "navbar__item",
                      },
                      children: [
                        {
                          tagName: "a",
                          attrs: {
                            href: "#",
                          },
                          textContent: "기프트 카드",
                        },
                      ],
                    },
                    {
                      tagName: "li",
                      attrs: {
                        class: "navbar__item",
                      },
                      children: [
                        {
                          tagName: "a",
                          attrs: {
                            href: "#",
                          },
                          textContent: "카드",
                        },
                      ],
                    },
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
        },
      ],
    },
    sidebar: {
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
            {
              tagName: "h3",
              textContent: "디지털 콘텐츠 및 기기",
            },
            {
              tagName: "ul",
              attrs: {
                class: "sidebar__sub",
              },
              children: [
                {
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
                          textContent: "Amazon Music",
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
                },
                {
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
                          textContent: "Kindle E-Reader 및 도서",
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
                },
                {
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
                          textContent: "안드로이드 앱스토어",
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
                },
              ],
            },
            {
              tagName: "h3",
              textContent: "부서별 쇼핑",
            },
            {
              tagName: "ul",
              attrs: {
                class: "sidebar__sub",
              },
              children: [
                {
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
                          textContent: "전자",
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
                },
                {
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
                          textContent: "컴퓨터",
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
                },
                {
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
                          textContent: "Alexa 스마트 홈",
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
                },
                {
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
                          textContent: "예술 및 공예",
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
                },
                {
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
                          children: [
                            {
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
                                      textContent: "전자",
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
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    main: {
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
        {
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
        },
        {
          tagName: "div",
          attrs: {
            class: "inner",
          },
          children: [
            {
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
            },
            {
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
                            "aria-label": "집에서 입어보기",
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
                                    src: "./src/img/content/4.png",
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
                                  textContent: "집에서 입어보기",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "특가",
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
                                    src: "./src/img/content/8.png",
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
                                  textContent: "특가",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "지금 쇼핑하세요",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "피트니스용",
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
                                    src: "./src/img/content/12.png",
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
                                  textContent: "피트니스용",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "Amazon Basics",
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
                                    src: "./src/img/content/1.png",
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
                                  textContent: "Amazon Basics",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "건강 및 퍼스널 케어",
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
                                    src: "./src/img/content/5.png",
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
                                  textContent: "건강 및 퍼스널 케어",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "가정 및 주방",
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
                                    src: "./src/img/content/9.png",
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
                                  textContent: "가정 및 주방",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "Change your language preference",
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
                                    src: "./src/img/content/2.png",
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
                                  textContent:
                                    "Change your language preference",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "Click here to shop in English",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "드레스",
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
                                    src: "./src/img/content/6.png",
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
                                  textContent: "드레스",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "활동추적기 및 스마트워치 쇼핑",
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
                                    src: "./src/img/content/10.png",
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
                                  textContent: "활동추적기 및 스마트워치 쇼핑",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "노트북 및 태블릿 쇼핑",
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
                                    src: "./src/img/content/13.png",
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
                                  textContent: "노트북 및 태블릿 쇼핑",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "전자기기",
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
                                    src: "./src/img/content/3.png",
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
                                  textContent: "전자기기",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "Kindle E-readers",
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
                                    src: "./src/img/content/7.png",
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
                                  textContent: "Kindle E-readers",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "지금 쇼핑하세요",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
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
                            "aria-label": "반려동물용품 쇼핑",
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
                                    src: "./src/img/content/11.png",
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
                                  textContent: "반려동물용품 쇼핑",
                                },
                                {
                                  tagName: "a",
                                  attrs: {
                                    class: "more",
                                    href: "#",
                                  },
                                  textContent: "더보기",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
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
          children: [
            {
              tagName: "section",
              attrs: {
                class: "footer__menu",
                tabindex: "0",
                "aria-label": "당사에 대해 알아보기",
              },
              children: [
                {
                  tagName: "h2",
                  textContent: "당사에 대해 알아보기",
                },
                {
                  tagName: "nav",
                  children: [
                    {
                      tagName: "ul",
                      attrs: {
                        class: "footer__menu__list",
                      },
                      children: [
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "커리어",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "블로그",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon 소개",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "투자자 관계",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon 디바이스",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "아마존 사이언스",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tagName: "section",
              attrs: {
                class: "footer__menu",
                tabindex: "0",
                "aria-label": "당사와 함께 돈 벌기",
              },
              children: [
                {
                  tagName: "h2",
                  textContent: "당사와 함께 돈 벌기",
                },
                {
                  tagName: "nav",
                  children: [
                    {
                      tagName: "ul",
                      attrs: {
                        class: "footer__menu__list",
                      },
                      children: [
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon에서 판매",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon Business에서 판매",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon에서 앱 판매",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "계열사 되기",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "제품 광고",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon에 자체 게시",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon 허브 호스팅",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent:
                                "당사와 함게 돈 벌기에 대해 자세히 보기",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tagName: "section",
              attrs: {
                class: "footer__menu",
                tabindex: "0",
                "aria-label": "Amazon 결제 제품",
              },
              children: [
                {
                  tagName: "h2",
                  textContent: "Amazon 결제 제품",
                },
                {
                  tagName: "nav",
                  children: [
                    {
                      tagName: "ul",
                      attrs: {
                        class: "footer__menu__list",
                      },
                      children: [
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "포인트로 구입",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "잔고 재로드",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon 환율 변환기",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tagName: "section",
              attrs: {
                class: "footer__menu",
                tabindex: "0",
                "aria-label": "지원",
              },
              children: [
                {
                  tagName: "h2",
                  textContent: "지원",
                },
                {
                  tagName: "nav",
                  children: [
                    {
                      tagName: "ul",
                      attrs: {
                        class: "footer__menu__list",
                      },
                      children: [
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "COVID-19 및 Amazon",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "사용자 계정",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "내 주문",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "배송 요금 및 정책",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "반품 및 교환",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "콘텐츠 및 디바이스 관리",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "Amazon Assistant",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__menu__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "도움말",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
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
                      children: [
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__info__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "이용약관",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__info__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "개인정보 취급 고지",
                            },
                          ],
                        },
                        {
                          tagName: "li",
                          attrs: {
                            class: "footer__info__item",
                          },
                          children: [
                            {
                              tagName: "a",
                              attrs: {
                                href: "#",
                              },
                              textContent: "광고 개인정보보호 선택 항목",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tagName: "address",
                  attrs: {
                    class: "footer__info__address",
                    tabindex: "0"
                  },
                  textContent: "@ 1996-2023, Amazon.com, Inc. 또는 계열사"
                }
              ],
            },
          ],
        },
      ],
    },
  };
}
