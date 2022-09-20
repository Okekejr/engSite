import { Flex } from "@chakra-ui/react"
import { VFC } from "react"
import { Icon } from "./Icon"
import { Wordmark } from "./Wordmark"

export const Logo: VFC = () => {
  return (
    <Flex alignItems="center">
      <Icon marginRight="0.5rem" w="1.5rem" color="neutral.100" />
      <Wordmark w="107px" />
    </Flex>
  )
}
