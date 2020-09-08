import { Reminder } from '@root/types/reminder'
import { recordReminders, retrieveReminders } from '@root/data/reminder'
import moment from 'moment'
export const addNewReminder = (item: Reminder): Reminder[] => {
  let reminders = retrieveReminders()
  reminders.push(item)
  recordReminders(reminders)
  return reminders
}

export const editReminder = (item: Reminder): Reminder[] => {
  let reminders = retrieveReminders()
  let newReminders = reminders.map((itemR: Reminder) => {
    if (itemR.id != item.id) {
      return itemR
    } else {
      return item
    }
  })
  recordReminders(newReminders)
  return newReminders
}

export const removeReminder = (item: Reminder): Reminder[] => {
  let reminders = retrieveReminders()
  let newReminders = reminders.filter((itemR: Reminder) => item.id != itemR.id)
  recordReminders(newReminders)
  return newReminders
}

export const removeAllRemindersDay = (day: moment.Moment): Reminder[] => {
  let reminders = retrieveReminders()
  let newReminders = reminders.filter(
    (itemR: Reminder) => day.format() != moment(itemR.date).format()
  )
  recordReminders(newReminders)
  return newReminders
}
