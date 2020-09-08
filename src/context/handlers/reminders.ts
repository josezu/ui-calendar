import { Reminder } from '@root/types/reminder'

export const addNewReminder = (
  item: Reminder,
  reminders: Reminder[]
): Reminder[] => {
  console.log(item)
  return reminders
}

export const editReminder = (
  item: Reminder,
  reminders: Reminder[]
): Reminder[] => {
  console.log(item)
  return reminders
}

export const removeReminder = (
  item: Reminder,
  reminders: Reminder[]
): Reminder[] => {
  console.log(item)
  return reminders
}

export const removeAllRemindersDay = (
  day: Date,
  reminders: Reminder[]
): Reminder[] => {
  console.log(day)

  return reminders
}
