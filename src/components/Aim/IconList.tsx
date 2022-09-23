import { GauField } from "components/_icons/GauField"
import { GauIcon } from "components/_icons/GauIcon"

export interface Icons {
  icon: React.ReactElement
}

export interface Icon {
  [key: string]: Icons
}

export const IconList: Icon = {
  gauIcon: {
    icon: <GauIcon />,
  },
  gauField: {
    icon: <GauField />,
  },
}
