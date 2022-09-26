import { Box, BoxProps, Flex, Heading } from "@chakra-ui/react"
import { GauButton } from "components/GauButton"
import { SectionContainer } from "components/SectionContainer"
import Image from "next/image"
import { FC } from "react"

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
        <Flex dir="column" my={24}>
          <Box w={{ lg: "50rem" }}>
            <Heading
              fontSize={{ base: "1.8rem", md: "3.5rem" }}
              fontWeight="black"
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
            <GauButton buttonTitle="Launch App" />
          </Box>
        </Flex>
      </Box>
    </SectionContainer>
  )
}
