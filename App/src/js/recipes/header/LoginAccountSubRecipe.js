import { LoginAccountSubItemRecipe } from "./LoginAccountSubItemRecipe.js";

export function LoginAccountSubRecipe ({ title, items }) {
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
            children: items.map(LoginAccountSubItemRecipe),
          },
        ],
      },
    ],
  };
};