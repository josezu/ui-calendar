import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'

export const CalendarWrapper = styled(Container)`
  margin: 1rem auto;
`

export const MonthsFilter = styled(Row)``
export const MonthName = styled(Col)`
  text-align: center;
  border: solid 1px red;
  padding: 1rem;

  cursor: pointer;
`

export const WeekWrapper = styled(Row)`
  margin-top: 1rem;
`

export const DayLabel = styled(Col)`
  text-align: center;
  border: solid 1px black;
  padding: 0.5rem 1rem;
  flex: 150px;
`

export const MonthWrapper = styled(Row)``

export const DayItem = styled(Col)`
  border: solid 1px;
  flex: 150px;
  height: 100px;
  cursor: pointer;
`
