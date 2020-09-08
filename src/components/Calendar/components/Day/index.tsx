import React, { useState, useEffect, useContext } from 'react'

import moment from 'moment'

import {
  DayItem,
  DayNumber,
  ReminderItem,
  ReminderList,
  Description,
} from './style'
import { DayType } from '@root/types/day'
import { Reminder } from '@root/types/reminder'
import { getRemindersForDay } from '@root/helpers/reminder'
import { BsFillCircleFill } from 'react-icons/bs'
import MainContext from '@root/context'
import ModalDay from '../ModalDay'
type DayProps = {
  day: DayType
  setCurrentMonth: (date: moment.Moment) => void
}

const Day = ({ day, setCurrentMonth }: DayProps) => {
  let {
    state: { reminders },
  } = useContext(MainContext)

  const [openModal, setOpenModal] = useState<boolean>(false)

  const [currentReminders, setCurrentReminders] = useState<Reminder[]>()

  useEffect(() => {
    if (day.currentMonth) {
      setCurrentReminders(getRemindersForDay(day.date))
    } else {
      setCurrentReminders([] as Reminder[])
    }
  }, [reminders])

  return openModal ? (
    <ModalDay day={day} closeModal={setOpenModal} />
  ) : (
    <DayItem
      isCurrentMonth={day.currentMonth}
      onClick={() => {
        !day.currentMonth
          ? setCurrentMonth(moment(day.date))
          : setOpenModal(true)
      }}
    >
      <DayNumber>{day.date.format('DD')}</DayNumber>
      <ReminderList>
        {currentReminders?.map((reminder: Reminder) => (
          <ReminderItem key={`reminder-item-${reminder.id}`}>
            <Description>{reminder.description}</Description>
            {reminder.color != '' && (
              <BsFillCircleFill
                size="10px"
                color={reminder.color}
              ></BsFillCircleFill>
            )}
          </ReminderItem>
        ))}
      </ReminderList>
    </DayItem>
  )
}

export default Day
