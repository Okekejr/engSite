import { Box, Text } from "@chakra-ui/react"
import { PolygonW } from "components/_icons/PolygonW"
import { FC, useEffect, useState } from "react"
import { UsdtFeed } from "./UsdtFeed"

export const MaticData: FC = () => {
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
          <PolygonW w="25px" h="25px" /> MATIC = {(1 * value).toFixed(4)} USD
        </Text>
      )}
    </Box>
  )
}
