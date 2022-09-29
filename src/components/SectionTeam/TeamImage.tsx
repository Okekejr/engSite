import { Image, Box } from "@chakra-ui/react"

export const TeamImage = () => {
  return (
    <Box
      width="1011px"
      height="889px"
      position="absolute"
      top={{ base: "151px", md: "250px", lg: "124px" }}
      right={{ base: "-300px", md: "-80px", lg: "150px" }}
      zIndex="1"
      maxW="initial"
    >
      <picture>
        <source srcSet="assets/bg-btm-center.webp" type="image/webp" />
        <source srcSet="assets/bg-btm-center.png" type="image/png" />
        <Image
          height="1000px"
          width="1000px"
          src="assets/bg-btm-center.png"
          alt=""
        />
      </picture>
    </Box>
  )
}
