import { Box, Text } from "@chakra-ui/react"
import { TetherW } from "components/_icons/TetherW"
import { FC, useEffect, useState } from "react"
import { UsdtFeed } from "./UsdtFeed"

export const UsdtData: FC = () => {
  const [value, setValue] = useState<number | null>(null)

  if (!UsdtFeed) return null

  useEffect(() => {
    UsdtFeed().then(price => setValue(price))
  }, [value])

  return (
    <Box>
      {value && (
        <Text>
          {" "}
          <TetherW w="25px" h="25px" /> USDT = {(1 * value).toFixed(4)} USD
        </Text>
      )}
    </Box>
  )
}
