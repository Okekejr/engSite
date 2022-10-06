import { IRouteGroup } from "./IRoute"

export const about: IRouteGroup = {
  title: "About",
  routes: [
    {
      id: "company-nav-item",
      url: "https://gaugecash.gitbook.io/gaugecash/gaugecash-1/introduction",
      title: "Company",
      active: true,
      isExternal: true,
    },
  ],
}
