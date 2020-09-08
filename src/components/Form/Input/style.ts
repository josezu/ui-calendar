import styled from 'styled-components'

import { Field } from 'formik'

type Props = {
  hasError: boolean
}
export const StyledField = styled(Field)<Props>`
  padding: 0.8rem;
  font-size: 14px;
  max-width: 100%;
  border: solid 1px ${(props) => (props.hasError ? '#ff243a' : '#d5d5d5')};
  border-radius: 5px;
  background-color: #ffffff;

  &:focus {
    outline: none;
    border: solid 1px #ff243a;
  }
`
