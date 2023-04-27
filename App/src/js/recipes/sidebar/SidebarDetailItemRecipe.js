export function SidebarDetailItemRecipe({ textContent, href }) {
  return {
    tagName: "li",
    children: [
      {
        tagName: "a",
        attrs: {
          class: "sidebar__item",
          tabindex: "-1",
          href,
        },
        textContent,
      },
    ],
  };
}