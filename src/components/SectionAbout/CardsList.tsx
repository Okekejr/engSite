import { FlexProps, Grid, GridProps } from "@chakra-ui/react"
import { Card } from "./Card"
import { DataType } from "./AboutData"
import { FC } from "react"

interface Props extends GridProps {
  data: DataType
}

export const CardsList: FC<Props> = ({ data, ...rest }) => {
  const items = Object.values(data)
  return (
    <Grid
      maxW="608px"
      gap={{ base: 16, lg: 20 }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr" }}
      {...rest}
    >
      {items.map(card => {
        return <Card data={card} key={card._id} />
      })}
    </Grid>
  )
}
