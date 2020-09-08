import { Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { media } from '@root/theme'

type PropsDay = {
  isCurrentMonth: boolean
}
export const DayItem = styled.div<PropsDay>`
  color: ${(props) => (props.isCurrentMonth ? 'black' : '#ccc')};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 1rem 0;
`

export const DayNumber = styled.div`
  text-align: right;
`
export const ReminderList = styled.div`
  flex: auto;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
`
export const ReminderItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

export const Description = styled.span``

export const HeadWrapper = styled.div`
  span {
    margin-right: 1rem;
  }
  svg {
    cursor: pointer;
  }
`

export const WrapperForm = styled.div`
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #d8d8d8;
  background-color: #ffffff;
`

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const ButtonContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 1rem;
  flex-wrap: wrap;
  div {
    margin: 0.5rem 0;

    @media ${media.sm} {
      margin: 0 1rem;
      &:first-child {
        margin-right: 0.5rem;
      }

      &:last-child {
        margin-left: 0.5rem;
        margin-right: 0;
      }
    }
  }
`
