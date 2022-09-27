import { FC } from "react"
import { Avatar, Box, BoxProps, Link, Text, VStack } from "@chakra-ui/react"
import { Twitter } from "components/_icons/Twitter"
import { Linkedln } from "components/_icons/Linkedln"

interface Props extends BoxProps {
  data: {
    id: number
    headshot: string
    name: string
    linkedin?: string
    twitter?: string
    role: string
  }
}

export const TeamCards: FC<Props> = ({ data, ...rest }) => {
  const { id, name, headshot, linkedin, twitter, role } = data
  const src = headshot
  return (
    <Box {...rest}>
      <VStack
        display="flex"
        flexDirection="column"
        padding="5"
        alignItems="flex-start"
        key={id}
      >
        <Avatar name={name} src={src} size="2xl" background="transparent" />
        <Box w="12rem">
          <Text fontSize="1.25rem" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="0.813rem" color="neutral.200">
            {role}
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {linkedin && (
            <Link href={linkedin} isExternal>
              <Linkedln />
            </Link>
          )}
          {twitter && (
            <Link href={twitter} isExternal>
              <Twitter />
            </Link>
          )}
        </Box>
      </VStack>
    </Box>
  )
}
