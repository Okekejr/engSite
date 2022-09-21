import { IRouteGroup } from "./IRoute"

import { socialsList } from '../socialsList'

export const community: IRouteGroup = {
  title: "Our Space",
  routes: [
    {
      id: 'github-nav-item',
      url: socialsList.github.url,
      title: 'Github',
      isExternal: true,
    },
    {
      id: "telegram-nav-item",
      url: socialsList.telegram.url,
      title: "Telegram",
      isExternal: true,
    },
    {
      id: "twitter-nav-item",
      url: socialsList.twitter.url,
      title: "Twitter",
      isExternal: true,
    },
  ],
}
