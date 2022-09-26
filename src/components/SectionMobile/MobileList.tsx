import { Box, BoxProps, Flex, HStack, Text } from "@chakra-ui/react"
import { FC } from "react"
import { DataMobile } from "./mobileData/MobileData"

interface Props extends BoxProps {
  Data: DataMobile
}

export const MobileList: FC<Props> = ({ Data, ...rest }) => {
  const items = Object.values(Data)
  return (
    <HStack gap={{ base: "2", md: "6" }} {...rest}>
      {items.map((item, i) => {
        return (
          <Flex w="fit-content" alignItems="center" key={i}>
            <Box mr={2}>{item.icon}</Box>
            <Text fontSize={{ base: "1rem", md: "1.8rem" }}>{item.name}</Text>
          </Flex>
        )
      })}
    </HStack>
  )
}
