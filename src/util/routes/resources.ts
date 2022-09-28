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
      id: "whitepaper-nav-item",
      url: "https://gaugecash.gitbook.io/gaugecash/whitepaper/gaugecash-a-decentralized-monetary-system/1.-introduction-and-context",
      title: "Whitepaper",
      isExternal: true,
    },
    {
      id: "docs-nav-item",
      url: "https://gaugecash.gitbook.io/gaugecash/",
      title: "Documentation",
      isExternal: true,
    },
  ],
}
