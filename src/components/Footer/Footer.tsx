import { FC } from "react"
import { Container, ContainerProps, Flex } from "@chakra-ui/react"
import { Disclaimer } from "./Disclaimer"
import { Copyright } from "./Copyright"
import { SocialLinks } from "./SocialLinks"
import { ResourceLinks } from "./ResourceLinks"

export const Footer: FC<ContainerProps> = props => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      maxW="container.xl"
      w="100%"
      position="relative"
      px={{ base: 4, md: 7, lg: 24 }}
      pt={{ base: 4, md: 16 }}
      zIndex={10}
      {...props}
    >
      <Disclaimer />
      <Flex
        mt={10}
        pt={10}
        pb={10}
        borderTop="1px solid"
        borderColor="primary.dark"
      >
        <Flex
          w="100%"
          marginTop={["1.5rem", "0"]}
          justifyContent="space-between"
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <Copyright
            color="neutral.300"
            fontSize="sm"
            mt={{ base: 8, md: 0 }}
          />
          <ResourceLinks />
          <SocialLinks w="15rem" />
        </Flex>
      </Flex>
    </Container>
  )
}
