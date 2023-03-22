import { VALIDATION } from './validation';

export const getDate = (date: number, minMax: 'max' | 'min') => {
  const dateString = new Date(date);
  const hours = dateString.getHours();
  const minutes = dateString.getMinutes();
  const seconds = dateString.getSeconds();
  const dTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
  switch (minMax) {
    case 'min':
      return date - dTime;
    case 'max':
      return date + dTime;
  }
};

export const checkDateValidation = (date: string | undefined) => {
  if (date === undefined) return false;
  const dateNumber = Date.parse(date);
  if (isNaN(dateNumber)) return false;
  return VALIDATION.DATE_INPUT.min < dateNumber && dateNumber < VALIDATION.DATE_INPUT.max;
};

export const checkTextValidation = (value: string, regExp: RegExp) => {
  const match = value.match(regExp);
  if (match) {
    return match[0].length === value.length;
  }
  return false;
};
