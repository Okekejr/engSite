import { Button, ButtonProps, Flex, IconProps, Text } from "@chakra-ui/react"
import { ArrowRight } from "./_icons/ArrowRight"
import { fonts } from "theme/Fonts"
import { Link } from "./Link"

interface Props extends ButtonProps {
  buttonTitle?: string
  hasIcon?: boolean
  href?: string
  buttonTextfontSize?: string | { [key: string]: string }
  onClick?: () => void
  arrowStyles?: IconProps
  isExternal?: boolean
}

export const GauButton: React.FC<Props> = ({
  buttonTitle = "Get Started",
  hasIcon = true,
  href = "http://app.gaugecash.com/",
  buttonTextfontSize = "button",
  arrowStyles,
  isExternal,
  ...rest
}) => {
  const handleClick = () => {
    if (rest.onClick != null) {
      rest.onClick()
    }
  }

  return (
    <Button
      fontSize={buttonTextfontSize}
      as={href === "" ? undefined : Link}
      href={href}
      isExternal={true}
      color="neutral.100"
      border="2px solid"
      borderColor="primary.base"
      backgroundColor="surface.quartnerary"
      borderRadius="3rem"
      backdropFilter="blur(8px)"
      onClick={handleClick}
      height="initial"
      type="button"
      px={12}
      py={6}
      _hover={{
        textDecoration: "none",
        backgroundColor: "surface.quinary",
        svg: {
          transform: "translate3d(4px, 0, 0)",
        },
      }}
      _active={{
        backgroundColor: "surface.senary",
      }}
      {...rest}
    >
      <Flex alignItems="center">
        <Flex
          flexDir="column"
          className="coming-soon-wrap"
          transition="all 175ms ease"
        >
          <Text fontFamily={fonts.heading} fontWeight="600">
            {buttonTitle}
          </Text>
        </Flex>
        {hasIcon && (
          <ArrowRight
            ml={3}
            transition="all .175s ease"
            width={{ base: "16px", lg: "24px" }}
            height={{ base: "16px", lg: "24px" }}
            {...arrowStyles}
          />
        )}
      </Flex>
    </Button>
  )
}
