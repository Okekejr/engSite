import { Box, BoxProps, Heading } from "@chakra-ui/react"
import { GauButton } from "components/GauButton"
import { SectionContainer } from "components/SectionContainer"
import { FC } from "react"
import { DataType } from "./AboutData"
import { AboutImage } from "./AboutImage"
import { CardsList } from "./CardsList"

interface Props extends BoxProps {
  data: DataType
}

export const AboutSection: FC<Props> = ({ data, ...rest }) => {
  return (
    <SectionContainer {...rest}>
      <Box
        zIndex={2}
        display="flex"
        flexDir={{ base: "column", xl: "row-reverse" }}
        justifyContent="space-between"
        gap={6}
      >
        <Heading
          fontSize={{ base: "2.5rem", md: "4rem" }}
          fontWeight="black"
          maxW="508px"
          mb="120px"
        >
          Why invest in Gaugecash ?
        </Heading>

        <Box mb={20}>
          <CardsList data={data} mb={20} />
          <GauButton
            buttonTitle="Learn More"
            href="https://gaugecash.gitbook.io/gaugecash/gaugecash-1/introduction"
          />
        </Box>
      </Box>
      <AboutImage />
    </SectionContainer>
  )
}
