import { intervals } from "../data/personalFinancialModel";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const fromIntervalToDate = interval =>
    new Date(2020, interval === intervals ? interval - 1 : interval, 1);

export const fromIntervalToText = interval => {
    const date = fromIntervalToDate(interval);
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}