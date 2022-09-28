import { List, ListProps } from "@chakra-ui/react"
import { FC } from "react"
import { CardInvestor } from "./CardInvestor"
import { InvestorsType } from "./InvestorData"

interface Props extends ListProps {
  data: InvestorsType
}

export const InvestorList: FC<Props> = ({ data, ...rest }) => {
  const items = Object.values(data)
  return (
    <List
      display="grid"
      gap={6}
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr",
      }}
      {...rest}
    >
      {items.map((investor, i) => {
        return <CardInvestor data={investor} key={i} />
      })}
    </List>
  )
}
