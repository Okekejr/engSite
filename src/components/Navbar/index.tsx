import { FC } from "react"
import { ContainerProps, Flex, useDisclosure } from "@chakra-ui/react"
import { Link } from "components/Link"
import { Logo } from "components/Logo"
import { MobileToggle } from "./MobileToggle"
import { NavLinks } from "./NavLinks"
import { LaunchAppButton } from "components/LaunchAppButton"
import { MobileDrawer } from "./MobileDrawer"

interface Props extends ContainerProps {
  isShrunk: boolean
}

export const Navbar: FC<Props> = ({ isShrunk, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      py={{ base: 3, md: 2 }}
      zIndex="sticky"
      left="0"
      position="fixed"
      top="0"
      w="100%"
      justify="center"
      _before={{
        bg: isShrunk ? "rgba(26, 26, 26, 0.5)" : "",
        content: "''",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backdropFilter: isShrunk ? "blur(8px)" : "",
      }}
      transition="all 200ms ease-in-out"
      {...rest}
    >
      <Flex
        justify="space-between"
        alignItems="center"
        maxW="container.xl"
        w="100%"
        px={{ base: 6, lg: 24 }}
        zIndex={1}
      >
        <Link aria-label="Logo" href="/">
          <Logo w={32} h={14} />
        </Link>

        <NavLinks
          onClose={onClose}
          marginInlineEnd={{ md: "1rem" }}
          display={{ base: "none", md: "flex" }}
          background={isShrunk ? "" : "background.100"}
          backdropFilter={isShrunk ? "" : "blur(5px)"}
          borderRadius="1.25rem"
          height="2.5rem"
          padding="0 1.5rem"
          gap={{ base: "1.2rem", lg: "0.5rem" }}
        />

        <LaunchAppButton
          buttonTextfontSize={{ base: "xs", sm: "sm" }}
          px={{ base: "5", sm: "6" }}
          py={{ base: "3", sm: "4" }}
          size="sm"
          w={{ base: "7.5rem", sm: "8rem" }}
          colorScheme="brand3"
          display={{ base: "none", sm: "flex" }}
          ml={{ sm: "auto", md: 0 }}
        />
        <MobileToggle
          isOpen={isOpen}
          onClick={onOpen}
          marginInlineStart={{ base: "1rem" }}
          mr={-4}
        />
        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Flex>
  )
}
