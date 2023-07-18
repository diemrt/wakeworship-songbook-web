import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
import Input, { InputProps } from "./Input.component"

type CustomInputProps<TFieldValues extends FieldValues> = {
  InputComponent: React.ElementType
  InputWrapperComponent: React.ElementType
  LabelComponent?: React.ElementType
  id?: string
  name: Path<TFieldValues>
  rules?: RegisterOptions
  register?: UseFormRegister<TFieldValues>
  errors?: Partial<DeepMap<TFieldValues, FieldError | any>>
  readOnly?: boolean
  disabled?: boolean
  label?: string
  step?: string
  className?: string
} & Omit<InputProps, "name">

function InputWrapper <TFieldValues extends Record<string, unknown>>({ 
  InputComponent,
  InputWrapperComponent,
  LabelComponent,
  name,
  id,
  errors,
  register,
  rules,
  label,
  className,
  ...rest
}: CustomInputProps<TFieldValues>) {
  return (
    <InputWrapperComponent className={className}>
      {typeof LabelComponent !== "undefined" 
      ? (<LabelComponent>{label}{rules?.required && "*"}</LabelComponent>) : null}
      <Input 
        InputComponent={InputComponent}
        name={name} 
        id={id ?? name} 
        placeholder={rest.placeholder ?? label}
        {...rest} 
        {...(register && register(name, rules))}
      />
      {errors &&
        <ErrorMessage
          errors={errors}
          name={name as any}
          render={({ message }) => (
            <div className="text-red-500 d-block text-sm">
              {message}
            </div>
          )}
        />
      }
    </InputWrapperComponent>
  )
}

export default InputWrapper