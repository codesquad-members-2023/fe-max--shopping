import { SidebarSubAllRecipe } from "./SidebarSubAllRecipe.js";
import { SidebarSubItemRecipe } from "./SidebarSubItemRecipe.js";

export function SidebarSubRecipe({ title, items, all }, i) {
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
          "data-category": i + 2,
        },
        children: [
          ...items.map(SidebarSubItemRecipe),
          all ? SidebarSubAllRecipe(all) : null,
        ].filter((v) => v),
      },
    ],
  };
}




