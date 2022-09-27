import { Avalanche } from "components/_icons/Avalanche"
import { Chainlink } from "components/_icons/Chainlink"
import { CurrencyLayer } from "components/_icons/CurrencyLayer"
import { Forge } from "components/_icons/Forge"
import { Linkpool } from "components/_icons/Linkpool"
import { OpenExchange } from "components/_icons/OpenExchange"
import { Polygon } from "components/_icons/Polygon"

export interface InvestorsType {
  [key: string]: {
    name: string
    wordmark: React.ReactElement
    url: string
  }
}

export const InvestorsData: InvestorsType = {
  polygon: {
    name: "Polygon",
    wordmark: <Polygon />,
    url: "https://polygon.technology/",
  },
  avalanche: {
    name: "Avalanche",
    wordmark: <Avalanche />,
    url: "https://www.avalabs.org/",
  },
  chainlink: {
    name: "Chainlink",
    wordmark: <Chainlink />,
    url: "https://chain.link/",
  },
  forge: {
    name: "Forge",
    wordmark: <Forge />,
    url: "https://1forge.com/",
  },
  currencylayer: {
    name: "CurrencyLayer",
    wordmark: <CurrencyLayer />,
    url: "https://currencylayer.com/",
  },
  openexchange: {
    name: "OpenExchange",
    wordmark: <OpenExchange />,
    url: "https://openexchangerates.org/",
  },
  linkpool: {
    name: "Linkpool",
    wordmark: <Linkpool />,
    url: "https://linkpool.io/",
  },
}
