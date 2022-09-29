import { FC } from "react"
import { Box, Container, Heading, Text, BoxProps } from "@chakra-ui/react"
import { GauButton } from "components/GauButton"
import { HeroImage } from "./HeroImage"

export const Hero: FC<BoxProps> = props => {
  return (
    <Box position="relative" zIndex="docked" {...props}>
      <Container
        maxW="container.xl"
        w="100%"
        minH={{ base: "100vh", md: "initial" }}
        display="flex"
        alignItems="flex-end"
        position="relative"
        px={{ base: 6, lg: 24 }}
        pt={{ base: 4, md: 10 }}
        pb={{ sm: 8, md: 8 }}
        mb={{ base: "180px", md: "80px" }}
      >
        <Container maxW="container.xl" position="relative" px="0">
          <HeroImage />
          <Box
            height="20vh"
            maxH="260px"
            display={{ base: "none", md: "block" }}
          />
          <Box
            zIndex="2"
            position="relative"
            maxW={{
              sm: "37.5rem",
              lg: "42.5rem",
            }}
            pb={{ base: 16, md: 36 }}
          >
            <Heading
              fontWeight="black"
              fontSize={{ base: "2.5rem", md: "4rem" }}
              pb={4}
            >
              World's First Decentralized Reserve Currency
            </Heading>
            <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
              Its your Money, It's your Work, It's your Heritage, This time
              around, NO Government, NO Central Bank, NO Private Company will be
              able to jeopardize or risk what you own.
            </Text>
            <GauButton w="max-content" mt={{ base: 10, md: 10 }} />
          </Box>
        </Container>
      </Container>
    </Box>
  )
}
