import { getDate } from './helper';
import { DELIVERY_END, DELIVERY_START } from './const';

export const VALIDATION = {
  NAME_INPUT: {
    regExp: /^([A-Z]){1,}([a-z]){1,}[ ]{1}([A-Z]){1,}([a-z]){1,}[,]{1}[0-9]{1,6}/g,
    error: 'Write you text right! Example: "Name Surname,1231" ',
  },
  DATE_INPUT: {
    min: getDate(DELIVERY_START, 'min'),
    max: getDate(DELIVERY_END, 'max'),
    error: 'Select you date correctly - two days from now and in the range 30 days!',
  },
};
