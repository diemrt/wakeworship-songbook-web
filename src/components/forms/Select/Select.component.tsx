import React from "react"

export type SelectProps = {
    SelectComponent: React.ElementType,
    id?: string,
    name: string
    label: string
    placeholder?: string
    className?: string
    isDisabled?: boolean
    onChange?: (e: any) => void
}

const CustomSelect = React.forwardRef(
  (
    { SelectComponent, ...props}: SelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => (
    <SelectComponent  
    {...props} />
  )
)

export default CustomSelect