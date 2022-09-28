import { Box, Link, Text } from "@chakra-ui/react"
import { ArrowTopRight } from "components/_icons/ArrowTopRight"
import { FC } from "react"
import { socialsList } from "util/socialsList"

export const SocialLinks: FC = () => {
  return (
    <Box display="flex" w="15rem">
      <Link href={socialsList.telegram.url} isExternal mr="20px">
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          w="fit-content"
        >
          <Text as="u" fontSize="12px" textDecoration="none" mr="5px">
            {socialsList.telegram.name}
          </Text>
          <ArrowTopRight />
        </Box>
      </Link>
      <Link href={socialsList.github.url} isExternal mr="20px">
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          w="fit-content"
        >
          <Text as="u" fontSize="12px" textDecoration="none" mr="5px">
            {socialsList.github.name}
          </Text>
          <ArrowTopRight />
        </Box>
      </Link>
      <Link href={socialsList.twitter.url} isExternal>
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          w="fit-content"
        >
          <Text as="u" fontSize="12px" textDecoration="none" mr="5px">
            {socialsList.twitter.name}
          </Text>
          <ArrowTopRight />
        </Box>
      </Link>
    </Box>
  )
}
