import { BoxProps, HStack } from "@chakra-ui/react"
import { FC } from "react"
import { GauData } from "./dataFeeds/GauData"
import { MaticData } from "./dataFeeds/MaticData"
import { UsdtData } from "./dataFeeds/UsdtData"

export const DataList: FC<BoxProps> = props => {
  return (
    <HStack gap={{ base: "2", md: "6" }} {...props}>
      <GauData />
      <UsdtData />
      <MaticData />
    </HStack>
  )
}
