import { Flex, FlexProps, Image, Text, Heading } from "@chakra-ui/react"

interface Props extends FlexProps {
  data: {
    Header: string
    SubHeading: string
    Img?: string
  }
}

export const Card: React.FC<Props> = ({ data, ...rest }) => {
  if (!data.Img)
    return (
      <Flex
        alignItems={{ base: "flex-start" }}
        flexDir={{ base: "column", lg: "row" }}
        {...rest}
      >
        <Flex flexDir="column">
          <Heading as="h3" fontSize="2xl" mb={4}>
            {data.Header}
          </Heading>
          <Text color="neutral.300" fontSize="md">
            {data.SubHeading}
          </Text>
        </Flex>
      </Flex>
    )
  return (
    <Flex
      alignItems={{ base: "flex-start", lg: "center" }}
      flexDir={{ base: "column", lg: "row" }}
      {...rest}
    >
      <Image
        src={data.Img}
        alt={data.Header}
        height="160px"
        width="160px"
        flexShrink="0"
        mr={8}
        mb={{ base: 6, lg: "34px" }}
      />
      <Flex flexDir="column">
        <Heading as="h3" fontSize="2xl" mb={4}>
          {data.Header}
        </Heading>
        <Text color="neutral.300" fontSize="md">
          {data.SubHeading}
        </Text>
      </Flex>
    </Flex>
  )
}
