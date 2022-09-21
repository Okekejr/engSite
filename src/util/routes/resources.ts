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
      url: "https://gaugecash.gitbook.io/gaugecash/",
      title: "Documentation",
      isExternal: true,
    },
  ],
}
