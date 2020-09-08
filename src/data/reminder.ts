import { Reminder } from '@root/types/reminder'

export const retrieveReminders = () => {
  const reminders = localStorage.getItem('reminders')
  if (typeof reminders === 'string') {
    return JSON.parse(reminders) as Reminder[]
  } else {
    return [] as Reminder[]
  }
}
export const recordReminders = (reminders: Reminder[]) => {
  window.localStorage.setItem('reminders', JSON.stringify(reminders))
}
export const removeReminders = () => {
  window.localStorage.removeItem('reminders')
}
