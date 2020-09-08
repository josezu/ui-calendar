import React from 'react'
import { StyledField } from './style'
import ErrorMessage from '../ErrorMessage'

type TextareaProps = {
  name: string
  hasError: boolean
  placeholder?: string
  value: string
  handleChange: any
  disabled: boolean
}

const Textarea = ({
  name,
  hasError,
  placeholder,
  handleChange,
  value,
  disabled,
}: TextareaProps) => {
  return (
    <>
      <StyledField
        as="textarea"
        name={name}
        hasError={hasError}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
      <ErrorMessage name={name} />
    </>
  )
}

export default Textarea
