import { FC } from "react"
import { Box, Container } from "@chakra-ui/react"
import { SommButton } from "components/SommButton"

export const Hero: FC = () => {
  return (
    <Box position="relative" zIndex="docked">
      <Container
        maxW="container.xl"
        w="100%"
        minH={{ base: "100vh", md: "initial" }}
        display="flex"
        alignItems="flex-end"
        position="relative"
        px={{ base: 6, lg: 24 }}
        pt={{ base: 4, md: 16 }}
        pb={{ sm: 8, md: 8 }}
        mb={{ base: "180px", md: "80px" }}
      >
        <Container maxW="container.xl" position="relative" px="0">
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
            {/* <SommButton w="max-content" mt={{ base: 10, md: 20 }} /> */}
          </Box>
        </Container>
      </Container>
    </Box>
  )
}