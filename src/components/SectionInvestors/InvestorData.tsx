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
  chainlink: {
    name: "Chainlink",
    wordmark: <Chainlink w="203px" h="64px" />,
    url: "https://chain.link/",
  },
  avalanche: {
    name: "Avalanche",
    wordmark: <Avalanche w="202px" h="92px" />,
    url: "https://www.avalabs.org/",
  },
  openexchange: {
    name: "OpenExchange",
    wordmark: <OpenExchange w="303px" h="46px" />,
    url: "https://openexchangerates.org/",
  },
  forge: {
    name: "Forge",
    wordmark: <Forge w="117px" h="116px" />,
    url: "https://1forge.com/",
  },
  currencylayer: {
    name: "CurrencyLayer",
    wordmark: <CurrencyLayer w="276px" h="64px" />,
    url: "https://currencylayer.com/",
  },
  linkpool: {
    name: "Linkpool",
    wordmark: <Linkpool w="236px" h="86px" />,
    url: "https://linkpool.io/",
  },
  polygon: {
    name: "Polygon",
    wordmark: <Polygon w="171px" h="121px" />,
    url: "https://polygon.technology/",
  },
}
