import { Discord } from "components/_icons/Discord"
import { Telegram } from "components/_icons/Telegram"
import { Twitter } from "components/_icons/Twitter"

export interface Social {
  name: string
  url: string
  icon: React.ReactElement
}

export interface Socials {
  [key: string]: Social
}

export const socialsList: Socials = {
  telegram: {
    name: "Telegram",
    url: "https://t.me/getsomm",
    icon: <Telegram />,
  },
  twitter: {
    name: "Twitter",
    url: "https://twitter.com/sommfinance",
    icon: <Twitter />,
  },
  discord: {
    name: "Discord",
    url: "https://discord.com/invite/ZcAYgSBxvY",
    icon: <Discord />,
  },
}
