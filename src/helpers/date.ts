import moment from 'moment'

export const getMonthName = (date: moment.Moment) => {
  return date.format('MMMM-YYYY')
}
