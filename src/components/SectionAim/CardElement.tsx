import { Flex, FlexProps } from "@chakra-ui/react"
import { ReactElement } from "react"

interface Props extends FlexProps {
  children: ReactElement | ReactElement[]
}
export const CardElement: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Flex
      w={{ base: "340px", md: "315px", lg: "358px" }}
      border="1px solid"
      borderColor="surface.tertiary"
      backgroundColor="surface.secondary"
      borderRadius="16px"
      alignItems="center"
      backdropFilter="blur(5px)"
      px={6}
      py={4}
      {...rest}
    >
      {children}
    </Flex>
  )
}
