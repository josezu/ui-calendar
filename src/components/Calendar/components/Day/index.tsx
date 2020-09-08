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
import Modal from '@root/components/Modal'
type DayProps = {
  day: DayType
  setCurrentMonth: (date: moment.Moment) => void
}

const Day = ({ day, setCurrentMonth }: DayProps) => {
  const {
    state: { reminders },
  } = useContext(MainContext)

  const [openModal, setOpenModal] = useState<boolean>(false)

  const [currentReminders, setCurrentReminders] = useState<Reminder[]>()

  useEffect(() => {
    if (day.currentMonth) {
      setCurrentReminders(getRemindersForDay(day.date, reminders))
    }
  }, [reminders])

  return openModal ? (
    <Modal huge={true} closeModal={setOpenModal}>
      asdasd
    </Modal>
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
        {currentReminders?.map((reminder: Reminder, index: number) => (
          <ReminderItem key={`reminder-item-${reminder.id}-${index}`}>
            <Description>{reminder.description}</Description>
            {reminder.color != '' && (
              <BsFillCircleFill
                size="8px"
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
