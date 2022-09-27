import { Box, BoxProps, Container, Heading } from "@chakra-ui/react"
import { SectionContainer } from "components/SectionContainer"
import { FC } from "react"
import { TeamData } from "./TeamData"
import { TeamList } from "./TeamList"

export const Team: FC<BoxProps> = props => {
  return (
    <SectionContainer {...props}>
      <Box zIndex="2">
        <Container maxW="container.sm" position="relative" px="0" m={0}>
          <Heading
            my={24}
            fontSize={{ base: "2.5rem", md: "4rem" }}
            fontWeight={700}
          >
            Our team
          </Heading>
          <TeamList data={TeamData} />
        </Container>
      </Box>
    </SectionContainer>
  )
}
