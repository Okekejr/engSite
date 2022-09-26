import { BuyIcon } from "components/_icons/BuyIcon"
import { PayIcon } from "components/_icons/PayIcon"
import { StoreIcon } from "components/_icons/StoreIcon"
import { TrustIcon } from "components/_icons/TrustIcon"

export interface DataMobile {
  [key: string]: {
    name: string
    icon: React.ReactElement
  }
}

export const MobileData: DataMobile = {
  Buy: {
    name: "BUY",
    icon: <BuyIcon w="25px" h="23px" />,
  },
  Pay: {
    name: "PAY",
    icon: <PayIcon w="19px" h="23px" />,
  },
  Store: {
    name: "STORE",
    icon: <StoreIcon w="22px" h="21px" />,
  },
  Trust: {
    name: "TRUST",
    icon: <TrustIcon w="20px" h="23px" />,
  },
}
