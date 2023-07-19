import { ErrorMessage } from "@hookform/error-message"
import { Control, Controller, FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form"

import Select, { SelectProps } from './Select.component'
import useWatchFieldValueHook, { HookProps } from "./useWatchFieldValueHook.hook"

type CustomSelectProps<TFieldValues extends FieldValues> = {
    SelectWarpperComponent: React.ElementType,
    SelectComponent: React.ElementType,
    LabelComponent?: React.ElementType,
    id?: string
    name: Path<TFieldValues>
    rules?: RegisterOptions
    className?: string,
    register?: UseFormRegister<TFieldValues>
    errors?: FieldErrors<FieldValues>
    control: Control<TFieldValues, any>
    options?: FieldValues
    filterOption?: (candidate: FieldValues, input?: string) => boolean
    noOptionsMessage?: () => JSX.Element
    getOptionLabel?: (option: FieldValues) => string | JSX.Element
    getOptionValue?: (option: FieldValues) => string
    isMulti?: boolean,
    isClearable?: boolean,
    initialValue?: any
    whenFieldChanges?: () => void
    fieldDescription?: string
    watchedFieldProps?: HookProps
} & Omit<SelectProps, "name"> & HookProps

const SelectWrapper = <TFieldValues extends Record<string, unknown>>({
    SelectWarpperComponent,
    SelectComponent,
    LabelComponent,
    name,
    id,
    errors,
    className,
    register,
    control,
    rules,
    whenFieldChanges,
    fieldDescription,
    watchedFieldProps,
  ...rest
}: CustomSelectProps<TFieldValues>) => {
  const options = useWatchFieldValueHook(watchedFieldProps ?? {})

  return (
    <SelectWarpperComponent className={className}>
      {typeof LabelComponent !== "undefined" 
      ? (<LabelComponent>{rest?.label}{rules?.required && "*"}</LabelComponent>) : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={rest.initialValue}
        render={({ field: { onChange, ...fieldRest } }) => (
          <Select 
            SelectComponent={SelectComponent}
            placeholder={rest.placeholder || rest.label}
            id={id ?? name}
            onChange={e => {
              if(whenFieldChanges) {
                whenFieldChanges()
              }
              onChange(e)
            }}
            options={options ?? rest.options}
            {...rest}
            {...fieldRest}
          />
        )}
      />
      {fieldDescription &&
        <textarea color="muted">
          {fieldDescription}
        </textarea>
      }
      {errors &&
        <ErrorMessage
          errors={errors}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          name={name as any}
          render={({ message }) => (
            <div className="text-red-500 d-block text-sm">
              {message}
            </div>
          )}
        />
      }
    </SelectWarpperComponent>
  )
}

export default SelectWrapper