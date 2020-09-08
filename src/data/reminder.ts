import { Reminder } from '@root/types/reminder'

export const retrieveReminders = () => {
  //Localstorage instead api service
  const reminders = localStorage.getItem('reminders')
  if (typeof reminders === 'string') {
    return JSON.parse(reminders) as Reminder[]
  } else {
    return [] as Reminder[]
  }
}
export const recordReminders = (reminders: Reminder[]) => {
  //Localstorage instead api service

  window.localStorage.setItem('reminders', JSON.stringify(reminders))
}
export const removeReminders = () => {
  //Localstorage instead api service

  window.localStorage.removeItem('reminders')
}
