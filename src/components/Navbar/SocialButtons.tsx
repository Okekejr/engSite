import { FC } from "react"
import { Grid, GridItem, GridProps } from "@chakra-ui/react"
import { Social, socialsList } from "../../util/socialsList"
import { SocialButton } from "./SocialButton"

export const SocialButtons: FC<GridProps> = props => {
  const items = Object.values(socialsList)

  return (
    <Grid gap="2rem" gridAutoFlow="column" {...props}>
      {items.map((item: Social) => (
        <GridItem key={item.name}>
          <SocialButton data={item} />
        </GridItem>
      ))}
    </Grid>
  )
}
