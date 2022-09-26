import type { IconProps } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { FC } from "react"

export const TrustIcon: FC<IconProps> = props => {
  return (
    <Icon viewBox="0 0 20 23" {...props}>
      <path
        fill="#00D1FF"
        stroke="#00D1FF"
        stroke-linejoin="bevel"
        stroke-miterlimit="10"
        d="M10.078 21.939H9.67c-.116-.035-.233-.066-.347-.107a14.66 14.66 0 0 1-3.21-1.564c-1.837-1.21-3.19-2.82-4.03-4.859-.625-1.517-.895-3.109-1.018-4.733-.024-.323-.051-.646-.077-.97V6.73c.014-.228.03-.457.041-.686.02-.453.158-.866.425-1.232.453-.62 1.084-.89 1.836-.937 1.834-.115 3.51-.67 4.96-1.83.285-.228.547-.489.836-.712a1.278 1.278 0 0 1 1.571-.005c.21.16.4.347.601.519a8.236 8.236 0 0 0 3.09 1.67c.795.232 1.61.312 2.427.396 1.044.108 1.908 1.034 1.94 2.084.05 1.725.091 3.45-.077 5.172-.116 1.185-.317 2.353-.697 3.485-.758 2.255-2.094 4.08-4.054 5.436a13.936 13.936 0 0 1-3.81 1.848ZM2.252 8.425c-.034 1.653.054 3.297.447 4.912.498 2.045 1.48 3.794 3.096 5.166 1.17.993 2.513 1.673 3.953 2.175a.512.512 0 0 0 .312-.018c.936-.33 1.835-.742 2.677-1.271 1.579-.992 2.8-2.306 3.595-4.004.69-1.472.987-3.039 1.121-4.643.13-1.553.084-3.11.04-4.664-.014-.5-.35-.871-.848-.944-.644-.093-1.297-.14-1.934-.268a9.196 9.196 0 0 1-4.563-2.37c-.268-.252-.278-.252-.55.004a9.2 9.2 0 0 1-4.563 2.367c-.624.126-1.263.169-1.894.261-.557.082-.88.452-.886 1.015-.008.76-.002 1.521-.002 2.282Z"
      />
      <path
        fill="#00D1FF"
        stroke="#00D1FF"
        stroke-miterlimit="10"
        d="m8.357 12.475 3.897-3.903c.106-.106.21-.216.328-.308a1.022 1.022 0 0 1 1.382.09c.357.368.389.95.07 1.36-.07.091-.155.172-.236.254-1.508 1.51-3.016 3.02-4.525 4.528-.623.623-1.162.623-1.786.001-.539-.537-1.08-1.073-1.614-1.616-.472-.48-.503-1.114-.085-1.54.438-.446 1.06-.42 1.563.081.333.333.652.681 1.006 1.053Z"
      />
    </Icon>
  )
}
