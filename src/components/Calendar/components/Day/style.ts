import styled from 'styled-components'

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
  overflow: hidden;
  padding: 1rem 0;
`

export const DayNumber = styled.div`
  text-align: right;
`
export const ReminderList = styled.div`
  flex: auto;
  overflow-y: scroll;
  padding-right: 17px;
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
