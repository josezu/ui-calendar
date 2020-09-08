import { Moment } from 'moment'

export type Reminder = {
  id: string
  time: string
  description: string
  date: Moment
  city: string
  color: string
}
