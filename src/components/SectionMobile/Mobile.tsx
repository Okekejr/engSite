import { Box, BoxProps, Flex, Heading } from "@chakra-ui/react"
import { GauButton } from "components/GauButton"
import { SectionContainer } from "components/SectionContainer"
import Image from "next/image"
import { FC } from "react"
import { DataList } from "./DataList"
import { MobileData } from "./mobileData/MobileData"
import { MobileList } from "./MobileList"

export const MobileAppSection: FC<BoxProps> = props => {
  const src = "/assets/img/iphone.svg"
  return (
    <SectionContainer {...props}>
      <Box
        display="flex"
        flexDir={{ base: "column-reverse", xl: "row" }}
        justifyContent="space-between"
        gap={6}
      >
        <Image src={src} width="366px" height="656px" />
        <Flex dir="column" my={20}>
          <Box w={{ lg: "50rem" }}>
            <Heading
              fontSize={{ base: "1.8rem", md: "3.5rem" }}
              fontWeight="black"
              mb={24}
            >
              <Flex
                w={{ base: "21rem", md: "40rem" }}
                justifyContent="space-between"
              >
                Gaugecash
                <Heading
                  fontSize={{ base: "1.8rem", md: "3.5rem" }}
                  fontWeight="black"
                  color="text.400"
                >
                  Mobile App
                </Heading>
              </Flex>
            </Heading>
            <MobileList Data={MobileData} mb={16} />
            <DataList mb={24} />
            <Box textAlign={{ base: "center", md: "left" }}>
              <GauButton buttonTitle="Launch App" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </SectionContainer>
  )
}
