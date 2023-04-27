import { LoginAccountSubRecipe } from "./LoginAccountSubRecipe.js";

export function LoginRecipe({ loginAccountSubs }) {
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
              ...loginAccountSubs.map(LoginAccountSubRecipe),
            ],
          },
        ],
      },
    ],
  };
};