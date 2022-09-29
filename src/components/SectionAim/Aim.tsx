import { SectionContainer } from "components/SectionContainer"
import { FC } from "react"
import { BoxProps, Box, Heading, Text, Container } from "@chakra-ui/react"
import { GauTokens } from "./GauTokens"
import { AimImage } from "./AimImage"

const AimPage: FC<BoxProps> = props => {
  return (
    <SectionContainer {...props}>
      <AimImage />
      <Box zIndex={2}>
        <Container maxW="container.sm" position="relative" px="0" m={0}>
          <Heading
            mb={10}
            fontWeight="700"
            lineHeight={{ base: "116%", md: "110%" }}
            fontSize={{ base: "2xl", md: "4xl" }}
            letterSpacing="-1%"
          >
            GAUGECASH is a Decentralized Monetary System that will be available
            to anyone anywhere. In other words, it's a decentralized stable
            peer-to-peer cash system.
          </Heading>
          <Text
            fontSize={{ base: "button", md: "2xl" }}
            mb={8}
            color="neutral.300"
          >
            It has two tokens: GAUGECASH and GAUGEFIELD.
          </Text>
        </Container>
        <Box maxW={{ base: "100%", lg: "97%" }} position="relative" zIndex="2">
          <GauTokens />
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default AimPage
