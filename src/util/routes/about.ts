import { IRouteGroup } from "./IRoute"

export const about: IRouteGroup = {
  title: "About",
  routes: [
    {
      id: "company-nav-item",
      url: "/company",
      title: "Company",
      active: true,
    },
  ],
}
