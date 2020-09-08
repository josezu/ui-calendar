import React from 'react'

import { StyledErrorMessage } from './style'

type ErrorMessageProps = {
  name: string
}

const ErrorMessage = ({ name }: ErrorMessageProps) => {
  return <StyledErrorMessage name={name} component="span" />
}

export default ErrorMessage
