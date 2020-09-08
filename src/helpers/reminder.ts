import moment from 'moment'
import { Reminder } from '@root/types/reminder'

export const getRemindersForDay = (
  day: moment.Moment,
  reminders: Reminder[]
) => {
  return reminders.filter((reminder: Reminder) => {
    return (
      moment(reminder.date).format('DDDD-MM-YYYY') == day.format('DDDD-MM-YYYY')
    )
  })
}
