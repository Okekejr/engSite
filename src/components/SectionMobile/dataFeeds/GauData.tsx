import { Box, Flex, Text } from "@chakra-ui/react"
import { GauW } from "components/_icons/GauW"
import { FC, useEffect, useState } from "react"
import { GauFeed } from "./GauFeed"

export const GauData: FC = () => {
  const [value, setValue] = useState<number | null>(null)

  useEffect(() => {
    GauFeed().then(price => setValue(price))
  }, [value])

  return (
    <Box>
      {value && (
        <Text>
          {" "}
          <GauW w="25px" h="25px" /> GAU = {(1 * value).toFixed(4)} USD
        </Text>
      )}
    </Box>
  )
}
