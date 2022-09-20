import { IRouteGroup } from "./IRoute"

export const resources: IRouteGroup = {
  title: "Resources",
  routes: [
    {
      id: "blog-nav-item",
      url: "/blog",
      title: "Blog",
    },
    {
      id: "docs-nav-item",
      url: "https://tricky-sand-5e6.notion.site/Sommelier-Documentation-006e748753e34a1299f9b1d6ae3a4544",
      title: "Documentation",
      isExternal: true,
    },
  ],
}
