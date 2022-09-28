import { Box, BoxProps, HStack, Text } from "@chakra-ui/react"
import { Link } from "components/Link"
import { FC } from "react"
import { resources } from "util/routes/resources"

export const ResourceLinks: FC<BoxProps> = props => {
  return (
    <HStack
      w="11rem"
      justifyContent="space-between"
      mt={{ base: "2rem", md: "0" }}
      {...props}
    >
      <Link href={resources.routes[1].url} isExternal>
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          w="fit-content"
        >
          <Text as="u" fontSize="12px" textDecoration="none" mr="5px">
            {resources.routes[1].title}
          </Text>
        </Box>
      </Link>
      <Link href={resources.routes[2].url} isExternal>
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          w="fit-content"
        >
          <Text as="u" fontSize="12px" textDecoration="none" mr="5px">
            {resources.routes[2].title}
          </Text>
        </Box>
      </Link>
    </HStack>
  )
}
