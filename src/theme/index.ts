import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { colors } from "./colors"
import { styles } from "./styles"
import { Heading } from "./Heading"
import { fonts } from "./Fonts"
import { fontSizes } from "./fontSizes"

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles,
  sizes: {
    container: {
      xl: "1448px",
    },
  },
  fonts,
  fontSizes,
  components: {
    Heading,
  },
  colors,
})

export default theme
