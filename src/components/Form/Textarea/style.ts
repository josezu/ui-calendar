import styled from 'styled-components'

import { Field } from 'formik'

type Props = {
  hasError: boolean
}
export const StyledField = styled(Field)<Props>`
  padding: 1rem 1.2rem;
  font-size: 14px;
  max-width: 100%;
  min-height: 45px;
  border: solid 1px ${(props) => (props.hasError ? '#ff243a' : '#d5d5d5')};
  border-radius: 10px;

  &:focus {
    outline: none;
    border: solid 1px #ff243a;
  }
`
