import React from 'react'
import { StyledSelect, StyledOption } from './style'
import ErrorMessage from '../ErrorMessage'

type Option = {
  label: string
  value: string
}
type DropdownProps = {
  name: string
  value: string
  handleChange: any
  hasError: boolean
  options: Option[]
  disabled: boolean
}

const Dropdown = ({
  name,
  value,
  handleChange,
  hasError,
  options,
  disabled,
}: DropdownProps) => {
  return (
    <>
      <StyledSelect
        as="select"
        name={name}
        value={value}
        onChange={handleChange}
        hasError={hasError}
        disabled={disabled}
      >
        {options.map((option: Option, index: number) => (
          <StyledOption key={`option-${index}`} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
      <ErrorMessage name={name} />
    </>
  )
}

export default Dropdown
