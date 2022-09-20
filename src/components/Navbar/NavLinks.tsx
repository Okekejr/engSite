import { FC } from "react"
import {
  Button,
  Flex,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { Link } from "components/Link"
import { routes } from "../../util/routes/index"
import { IRouteGroup } from "util/routes/IRoute"
import { fonts } from "theme/Fonts"
import { ChevronUp } from "components/_icons/ChevronUp"

interface NavLinksProps extends FlexProps {
  onClose: () => void
}

export const NavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  return (
    <Flex as="nav" alignItems="center" {...rest}>
      {routes.map((routeGroup: IRouteGroup) => {
        return (
          <Menu key={routeGroup.title}>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  background="transparent"
                  rightIcon={
                    <ChevronUp
                      transition="all 175ms ease"
                      transform={isOpen ? "" : "scaleY(-1)"}
                    />
                  }
                  _hover={{ bg: "primary.dark" }}
                  _active={{ bg: "primary.dark" }}
                  _expanded={{ bg: "transparent" }}
                >
                  {routeGroup.title}
                </MenuButton>
                <MenuList
                  background="surface.secondary"
                  borderColor="primary.dark"
                  backdropFilter="blur(16px)"
                  borderRadius="12px"
                >
                  {routeGroup.routes.map(route => {
                    return (
                      <MenuItem
                        as={Link}
                        href={route.url}
                        isExternal={route.isExternal}
                        color="neutral.300"
                        key={route.title}
                        fontFamily={fonts.heading}
                        fontWeight="600"
                        fontSize="1rem"
                        _active={{ bg: "transparent" }}
                      >
                        {route.title}
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </>
            )}
          </Menu>
        )
      })}
    </Flex>
  )
}
