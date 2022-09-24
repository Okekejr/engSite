import { GauField } from "components/_icons/GauField"
import { GauIcon } from "components/_icons/GauIcon"

export interface Icons {
  icon: React.ReactElement
  url: string
}

export interface Icon {
  [key: string]: Icons
}

export const IconList: Icon = {
  gauIcon: {
    icon: <GauIcon />,
    url: "https://polygonscan.com/address/0xcbccdf5c97aac84f7536b255b5d35ed57ad363a3",
  },
  gauField: {
    icon: <GauField />,
    url: "https://polygonscan.com/address/0x69156e4338fe6023b73a6a7cca63cc8c57d43147",
  },
}
