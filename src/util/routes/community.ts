import { IRouteGroup } from "./IRoute"

import { socialsList } from '../socialsList'

export const community: IRouteGroup = {
  title: "Community",
  routes: [
    {
      id: "events-nav-item",
      url: "/events",
      title: "Events",
    },
    {
      id: "forum-nav-item",
      url: "https://community.sommelier.finance",
      title: "Forum",
      isExternal: true,
    },
    {
      id: "discord-nav-item",
      url: socialsList.discord.url,
      title: "Discord",
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
