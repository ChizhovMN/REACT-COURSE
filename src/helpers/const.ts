const DELIVERY_DATE = 30;
const ONE_DAY = 24 * 3600 * 1000;
export const DELIVERY_START = Date.now() + 2 * ONE_DAY;
export const DELIVERY_END = DELIVERY_START + DELIVERY_DATE * ONE_DAY;

export const LABEL = {
  NAME_INPUT: {
    htmlFor: 'name',
    classNames: ['text-label'],
    labelText: '1.Write your name,surname and zip-code',
  },
  DATE_INPUTE: {
    labelText: '4. Select date to your delivery',
    htmlFor: 'date',
    classNames: ['date-label'],
  },
};
