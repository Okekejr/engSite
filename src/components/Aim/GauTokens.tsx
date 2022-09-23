import { Box, BoxProps, Flex, Grid } from "@chakra-ui/react"
import { Link } from "components/Link"
import { CardElement } from "./CardElement"
import { IconList, Icons } from "./IconList"

const url = "https://gaugecash.gitbook.io/gaugecash/gaugecash-1/introduction"

export const GauTokens: React.FC<BoxProps> = ({ ...rest }) => {
  const items = Object.values(IconList)
  return (
    <Box
      position="relative"
      zIndex="2"
      w={{ base: "100%", md: "50rem", lg: "100%" }}
      {...rest}
    >
      <Grid gap={6} gridTemplateColumns={["1fr", "1fr", "398px 398px"]}>
        {items.map((icon: Icons, i) => (
          <Link isExternal href={url} key={i}>
            <CardElement justifyContent="center" height="100%">
              {icon.icon}
            </CardElement>
          </Link>
        ))}
      </Grid>
    </Box>
  )
}
