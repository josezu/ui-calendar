import React, { useState } from 'react'
import moment from 'moment'

import {
  CalendarWrapper,
  MonthsFilter,
  MonthName,
  WeekWrapper,
  MonthWrapper,
  DayLabel,
  DayItem,
} from './style'
import { getMonthName } from '@root/helpers/date'
import { DayType } from '@root/types/day'
import Day from './components/Day'

const Calendar = () => {
  const today = moment()

  const [currentMonth, setCurrentMonth] = useState(today)
  const lastMonth = moment(currentMonth).subtract(1, 'months')
  const nextMonth = moment(currentMonth).add(1, 'months')

  const startOfCurrentMonth = moment(currentMonth).startOf('month').get('day')
  const endOfCurrentMonth = moment(currentMonth).endOf('month').get('day')

  const days = [] as DayType[]

  for (let i = 0; i < startOfCurrentMonth; i++) {
    days.push({
      date: moment(currentMonth)
        .startOf('month')
        .subtract(startOfCurrentMonth - i, 'days'),
      currentMonth: false,
    } as DayType)
  }

  for (let index = 0; index < currentMonth.daysInMonth(); index++) {
    days.push({
      date: moment(currentMonth).startOf('month').add(index, 'days'),
      currentMonth: true,
    } as DayType)
  }

  let addDay = 0
  for (let i = endOfCurrentMonth; i < 6; i++) {
    days.push({
      date: moment(currentMonth)
        .startOf('month')
        .add(currentMonth.daysInMonth() + addDay, 'days'),
      currentMonth: false,
    } as DayType)
    addDay++
  }

  return (
    <CalendarWrapper fluid={true}>
      <MonthsFilter>
        <MonthName onClick={() => setCurrentMonth(lastMonth)} col={true}>
          {getMonthName(lastMonth)}
        </MonthName>
        <MonthName col={true}>{getMonthName(currentMonth)}</MonthName>
        <MonthName col={true} onClick={() => setCurrentMonth(nextMonth)}>
          {getMonthName(nextMonth)}
        </MonthName>
      </MonthsFilter>
      <WeekWrapper>
        <DayLabel col={true}>Sunday</DayLabel>
        <DayLabel col={true}>Monday</DayLabel>
        <DayLabel col={true}>Tuesday</DayLabel>
        <DayLabel col={true}>Wednesday</DayLabel>
        <DayLabel col={true}>Thursday</DayLabel>
        <DayLabel col={true}>Friday</DayLabel>
        <DayLabel col={true}>Saturday</DayLabel>
      </WeekWrapper>
      {
        <MonthWrapper>
          {days.map((day: DayType) => (
            <DayItem key={`day-item-${day.date}`}>
              <Day day={day} setCurrentMonth={setCurrentMonth}></Day>
            </DayItem>
          ))}
        </MonthWrapper>
      }
    </CalendarWrapper>
  )
}

export default Calendar
