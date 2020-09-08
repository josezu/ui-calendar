import React from 'react'
import { StyledLabel, StyledRequired } from './style'

type LabelProps = {
  title: string
  required?: boolean
}

const Label = ({ title, required }: LabelProps) => {
  return (
    <StyledLabel>
      {title}
      {required && <StyledRequired> *</StyledRequired>}
    </StyledLabel>
  )
}

export default Label
