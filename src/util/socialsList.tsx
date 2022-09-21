import { Telegram } from "components/_icons/Telegram"
import { Twitter } from "components/_icons/Twitter"

export interface Social {
  name: string
  url: string
  icon?: React.ReactElement
}

export interface Socials {
  [key: string]: Social
}

export const socialsList: Socials = {
  telegram: {
    name: "Telegram",
    url: "https://t.me/gaugecashchat",
    icon: <Telegram />,
  },
  twitter: {
    name: "Twitter",
    url: "https://twitter.com/GaugeCash",
    icon: <Twitter />,
  },
  github: {
    name: "Github",
    url: "https://github.com/gaugecash",
  },
}
