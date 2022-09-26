import { Box, BoxProps, Flex, HStack, Text } from "@chakra-ui/react"
import { FC, useEffect } from "react"
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
