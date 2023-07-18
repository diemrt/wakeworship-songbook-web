import React, { FC } from "react"

export type InputType = "text" | "number" | "password" | "email" | "hidden" | "date"
export type InputProps = {
    InputComponent: React.ElementType
    id?: string
    name: string
    placeholder?: string
    type: InputType 
    className?: string
    maxLength?: number
}

const Input: FC<InputProps> = React.forwardRef(
  (
    {InputComponent, ...props}: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => (
    <InputComponent ref={ref} {...props} />
  )
)
export default Input