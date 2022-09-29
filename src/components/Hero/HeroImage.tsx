import { Image, Box } from "@chakra-ui/react"

export const HeroImage = () => {
  return (
    <Box
      width="1011px"
      height="889px"
      position="absolute"
      top={{ base: "-190px", md: "-90px", lg: "-94px" }}
      left={{ base: "-460px", md: "-457px", lg: "-527px" }}
      zIndex="1"
      maxW="initial"
    >
      <picture>
        <source srcSet="assets/bg-top-left.webp" type="image/webp" />
        <source srcSet="assets/bg-top-left.png" type="image/png" />
        <Image
          height="1000px"
          width="1000px"
          src="assets/bg-top-left.png"
          alt=""
        />
      </picture>
    </Box>
  )
}
