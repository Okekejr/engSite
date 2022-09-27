import { Grid, GridProps } from "@chakra-ui/react"
import { FC } from "react"
import { TeamCards } from "./TeamCards"
import { DataT } from "./TeamData"

interface Props extends GridProps {
  data: DataT
}

export const TeamList: FC<Props> = ({ data, ...rest }) => {
  const items = Object.values(data)
  return (
    <Grid
      display="grid"
      m='auto'
      gap={24}
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr",
        xl: "1fr 1fr 1fr 1fr",
      }}
      zIndex={2}
      position="relative"
      {...rest}
    >
      {items.map((card, i) => {
        return <TeamCards data={card} key={i} />
      })}
    </Grid>
  )
}
