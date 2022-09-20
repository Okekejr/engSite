import { FC } from "react"
import { Box, BoxProps, Button } from "@chakra-ui/react"
import { Hamburger } from "components/_icons/Hamburger"

interface MobileToggleProps extends BoxProps {
  isOpen?: boolean
  onClick?: () => void
}

export const MobileToggle: FC<MobileToggleProps> = ({
  isOpen,
  onClick,
  ...rest
}) => {
  return (
    <Box
      background="transparent"
      as={Button}
      display={{ base: "block", md: "none" }}
      onClick={onClick}
      _hover={{ bg: "transparent" }}
      {...rest}
    >
      <Hamburger />
    </Box>
  )
}
