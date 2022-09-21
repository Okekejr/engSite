import { extendTheme } from "@chakra-ui/react"

import { colors } from "./colors"
import { styles } from "./styles"

const theme = extendTheme({
  styles,
  sizes: {
    container: {
      xl: "1448px",
    },
  },
  colors,
})

export default theme
