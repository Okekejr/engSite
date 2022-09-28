import { FC } from "react"
import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"

export const Disclaimer: FC<FlexProps> = props => {
  return (
    <Flex {...props}>
      <Box marginTop="98px" color="neutral.300" fontSize="xs">
        <Text marginBottom="1rem">
          *The information provided on this website does not constitute
          investment advice, financial advice, trading advice, or any other sort
          of advice and you should not treat any of the website's content as
          such. Do conduct your own due diligence and consult your financial
          advisor before making any investment decisions.
        </Text>
      </Box>
    </Flex>
  )
}
