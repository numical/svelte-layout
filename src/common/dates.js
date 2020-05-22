import { intervals } from '../products/personalFinancialModel';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const fromIntervalToDate = interval =>
  new Date(2020, interval === intervals ? interval - 1 : interval, 1);

export const fromIntervalToText = interval => {
  const date = fromIntervalToDate(interval);
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

const calcYear = date => date.getFullYear() - 2020;
const calcMonth = date => date.getMonth();

export const fromDateToInterval = date => calcYear(date) * 12 + calcMonth(date);

export const fromTodayToInterval = () => fromDateToInterval(new Date());
