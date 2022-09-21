import { FC } from "react"
import { Flex, LinkProps } from "@chakra-ui/react"
import { Social } from "../../util/socialsList"
import { Link } from "components/Link"

interface Props extends LinkProps {
  data: Social
}

export const SocialButton: FC<Props> = ({ data, ...rest }) => {
  return (
    <Link href={data.url} isExternal {...rest}>
      <Flex
        width="18px"
        height="18px"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        {data.icon}
      </Flex>
    </Link>
  )
}
