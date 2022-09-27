import { Box, Heading, List } from "@chakra-ui/react"
import { SectionContainer } from "components/SectionContainer"
import { FC } from "react"

export const InvestorsSection: FC = () => {
  return (
    <SectionContainer>
      <Box zIndex={2}>
        <Heading
          my={24}
          fontSize={{ base: "2.5rem", md: "4rem" }}
          fontWeight="700"
        >
          Our Investors
        </Heading>
        <List
          display="grid"
          gap={6}
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
        ></List>
      </Box>
    </SectionContainer>
  )
}
