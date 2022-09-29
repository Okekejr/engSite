import { Image, Box } from "@chakra-ui/react"

export const InvestorsImage = () => {
  return (
    <Box
      width="1011px"
      height="889px"
      position="absolute"
      top={{ base: "351px", md: "200px", lg: "124px" }}
      right={{ base: "-300px", lg: "-250px" }}
      zIndex="1"
      maxW="initial"
    >
      <picture>
        <source srcSet="assets/bg-btm-right.webp" type="image/webp" />
        <source srcSet="assets/bg-btm-right.png" type="image/png" />
        <Image
          height="1000px"
          width="1000px"
          src="assets/bg-btm-right.png"
          alt=""
        />
      </picture>
    </Box>
  )
}
