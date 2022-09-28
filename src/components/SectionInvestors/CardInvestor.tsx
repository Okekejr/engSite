import { Link } from "components/Link"
import LinkProps from "types/LinkProps"

interface Props extends LinkProps {
  data: {
    name: string
    wordmark: React.ReactElement
    url: string
  }
}

export const CardInvestor: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <Link
      px={10}
      py={10}
      href={data.url}
      isExternal={true}
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
      {data.wordmark}
    </Link>
  )
}
