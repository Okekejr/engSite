import { useState } from "react"
import { Button, ButtonProps, Flex, Text } from "@chakra-ui/react"
import { Link } from "components/Link"

interface Props extends ButtonProps {
  buttonTitle?: string
  href?: string
  buttonTextfontSize?: string | { [key: string]: string }
}

export const LaunchAppButton = ({
  buttonTitle = "Launch App",
  href = "http://app.gaugecash.com/",
  buttonTextfontSize = { base: "sm", sm: "md", lg: "lg" },
  ...rest
}: Props) => {
  const [isShown, setIsShown] = useState<boolean>(false)

  const handleHover = () => setIsShown(!isShown)

  return (
    <Button
      as={href === "" ? undefined : Link}
      color="neutral.100"
      border="2px solid"
      borderColor="primary.base"
      backgroundColor="surface.primary"
      borderRadius="2rem"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      type="button"
      isExternal={href}
      href={href}
      _hover={{
        textDecoration: "none",
        backgroundColor: "surface.quinary",
      }}
      {...rest}
    >
      <Flex flexDirection="column">
        <Text fontSize={buttonTextfontSize}>{buttonTitle}</Text>
      </Flex>
    </Button>
  )
}
