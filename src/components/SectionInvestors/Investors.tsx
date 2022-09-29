import { Box, BoxProps, Heading } from "@chakra-ui/react"
import { SectionContainer } from "components/SectionContainer"
import { FC } from "react"
import { InvestorsType } from "./InvestorData"
import { InvestorList } from "./InvestorList"
// import { InvestorsImage } from "./InvestorsImage"

interface Props extends BoxProps {
  data: InvestorsType
}

export const InvestorsSection: FC<Props> = ({ data, ...rest }) => {
  return (
    <SectionContainer {...rest}>
      {/* <InvestorsImage /> */}
      <Box zIndex={2}>
        <Heading
          my={24}
          fontSize={{ base: "2.5rem", md: "4rem" }}
          fontWeight="700"
        >
          Our Investors
        </Heading>
        <InvestorList data={data} />
      </Box>
    </SectionContainer>
  )
}
