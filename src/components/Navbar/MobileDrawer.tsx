import { FC } from "react"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Flex,
} from "@chakra-ui/react"
import { FiX } from "react-icons/fi"
import { MobileNavLinks } from "./MobileNavLinks"
import { SommButton } from "components/SommButton"

interface Props extends DrawerProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileDrawer: FC<Omit<Props, "children">> = ({
  isOpen,
  onClose,
  ...rest
}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} {...rest}>
      <DrawerOverlay />
      <DrawerContent bg="surface.senary" backdropFilter="blur(16px)">
        <DrawerCloseButton
          as={FiX}
          top="2.3rem"
          right=".75rem"
          w="2.5rem"
          h="2.5rem"
          color="neutral.100"
        />

        <DrawerBody display="flex" flexDir="column" alignItems="flex-end">
          <MobileNavLinks
            onClose={onClose}
            direction="column"
            alignItems="flex-end"
            mt="8rem"
          />

          <SommButton buttonTitle="Launch App" hasIcon={false} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
