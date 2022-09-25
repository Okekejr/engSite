export interface DataType {
  [key: string]: {
    Header: string
    SubHeading: string
    Img?: string
  }
}

export const AboutData: DataType = {
  problemSolving: {
    Header: "Solving Monitary Problems",
    SubHeading:
      "In the last century-plus, there have been around thirty Non-Domestic Currency Debt Crisis (typically inflationary deleveraging), causing millions of people to lose their wealth and transactional value. Within the crypto-space, the solution has been pegging tokens to the USD which doesn't solve the problem of Decentralization and long-term stability of the Asset.",
  },
  stableIndex: {
    Header: "More Stable using our Index",
    SubHeading:
      "We have created an Index coming from the Final Market Making of the Forex Market that is more stable than any other currency in the world including Gold and Silver. Stability means less volatility on average on any single period of time. Also, we have backed up the value of the GAUGECASH by the blockchain class in itself, taking advantage of its economic scarcity property.",
    Img: "https://images.unsplash.com/photo-1609869644293-6714a930d4f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1237&q=80",
  },
  investors: {
    Header: "Backed by Investors",
    SubHeading:
      "This creates a self-reinforcing economic system that brings unbelievable value for investors and users in a Decentralized and Immutable Fashion. This can be the most profitable venture in history for investors around the world, just because we are after the largest financial market in the world, the EUR/USD who transact 6 Trillion USD per day.",
  },
}
