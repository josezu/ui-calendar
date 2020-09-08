import React from 'react'
import { StyledField } from './style'
import ErrorMessage from '../ErrorMessage'

type InputProps = {
  type: string
  name: string
  hasError: boolean
  placeholder?: string
  disabled: boolean
}

const Input = ({ type, name, hasError, placeholder, disabled }: InputProps) => {
  return (
    <>
      <StyledField
        type={type}
        name={name}
        hasError={hasError}
        placeholder={placeholder}
        disabled={disabled}
      />
      <ErrorMessage name={name} />
    </>
  )
}

export default Input
