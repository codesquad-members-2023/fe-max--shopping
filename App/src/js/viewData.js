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
  };
}
