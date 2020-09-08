import moment from 'moment'
import { Reminder } from '@root/types/reminder'
import { retrieveReminders } from '@root/data/reminder'

export const getRemindersForDay = (day: moment.Moment) => {
  const reminders = retrieveReminders()
  return reminders
    .filter((reminder: Reminder) => {
      return moment(reminder.date).format() == day.format()
    })
    .sort(function (a, b) {
      if (a.time > b.time) {
        return 1
      }
      if (a.time < b.time) {
        return -1
      }
      return 0
    })
}
