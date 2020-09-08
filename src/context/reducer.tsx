import { Reminder } from '../types/reminder'

import {
  addNewReminder,
  removeReminder,
  removeAllRemindersDay,
  editReminder,
} from './handlers/reminders'

export type State = {
  reminders: Reminder[]
}
export type Action =
  | {
      type: 'setReminders'
      items: Reminder[]
    }
  | {
      type: 'addNewReminder'
      item: Reminder
    }
  | {
      type: 'removeReminder'
      item: Reminder
    }
  | {
      type: 'removeAllRemindersDay'
      day: Date
    }
  | {
      type: 'editReminder'
      item: Reminder
    }
export const InitialState: State = {
  reminders: [] as Reminder[],
}

export const ReducerContext = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setReminders': {
      return { ...state, reminders: action.items }
    }
    case 'addNewReminder': {
      const reminders = addNewReminder(action.item, state.reminders)
      return { ...state, reminders: reminders }
    }
    case 'editReminder': {
      const reminders = editReminder(action.item, state.reminders)
      return { ...state, reminders: reminders }
    }
    case 'removeReminder': {
      const reminders = removeReminder(action.item, state.reminders)
      return { ...state, reminders: reminders }
    }
    case 'removeAllRemindersDay': {
      const reminders = removeAllRemindersDay(action.day, state.reminders)
      return { ...state, reminders: reminders }
    }
  }
}
