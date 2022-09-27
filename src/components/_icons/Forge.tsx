import type { IconProps } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { FC } from "react"

export const Forge: FC<IconProps> = props => {
  return (
    <Icon viewBox="0 0 117 116" {...props}>
      <path
        fill="#E7E6E8"
        fillRule="evenodd"
        d="m63.988 1.794 47.037 23.91c3.405 1.725 5.475 4.936 5.475 8.386v47.82c0 3.45-2.097 6.66-5.475 8.386l-47.037 23.91c-3.404 1.725-7.572 1.725-10.976 0L5.975 90.296C2.57 88.57.5 85.36.5 81.91V34.09c0-3.45 2.097-6.66 5.475-8.386l47.037-23.91c3.404-1.725 7.599-1.725 10.976 0ZM88.447 34.09H40.618L29.125 47.53H40.62v37.926L55.9 67.751h13.319l11.493-13.44h-24.84V47.65h21.027l11.549-13.56Z"
        clipRule="evenodd"
      />
    </Icon>
  )
}
