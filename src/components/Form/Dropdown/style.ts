import styled from 'styled-components'

import { Field } from 'formik'

import chevron from '@root/assets/images/general/chevron.svg'
type Props = {
  hasError: boolean
}

export const StyledSelect = styled(Field)<Props>`
  -webkit-appearance: none;
  padding: 1rem;
  font-size: 14px;

  border: solid 1px ${(props) => (props.hasError ? '#ff243a' : '#ccc')};
  border-radius: 5px;
  background: url(${chevron});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 95% center;

  &:focus {
    outline: none;
    border: solid 1px #ff243a;
  }
`

export const StyledOption = styled.option``
