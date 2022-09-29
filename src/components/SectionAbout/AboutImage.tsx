import { Image, Box } from "@chakra-ui/react"

export const AboutImage = () => {
  return (
    <Box
      width="844px"
      height="auto"
      position="absolute"
      top={{ base: "-190px", md: "-90px", lg: "-294px" }}
      left={{ base: "-460px", md: "-457px", lg: "-227px" }}
      zIndex="1"
      maxW="initial"
      pointerEvents="none"
    >
      <picture>
        <source srcSet="assets/bg-mid-left.webp" type="image/webp" />
        <source srcSet="assets/bg-mid-left.png" type="image/png" />
        <Image
          height="1380px"
          width="844px"
          src="assets/bg-mid-left.png"
          alt=""
        />
      </picture>
    </Box>
  )
}
