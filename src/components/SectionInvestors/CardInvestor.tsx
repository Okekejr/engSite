import { ListItem, ListItemProps } from "@chakra-ui/react"
import { Link } from "components/Link"

interface Props extends ListItemProps {
  data: {
    name: string
    wordmark: React.ReactElement
    url: string
  }
}

export const CardInvestor: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <ListItem
      px={10}
      py={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="surface.secondary"
      border="1px solid"
      borderColor="surface.tertiary"
      borderRadius="24px"
      height="160px"
      w={{ base: "340px", md: "347px", lg: "400px" }}
      backdropFilter="blur(24px)"
      {...rest}
    >
      <Link href={data.url}>{data.wordmark}</Link>
    </ListItem>
  )
}
