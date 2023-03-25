const DELIVERY_DATE = 30;
const ONE_DAY = 24 * 3600 * 1000;
export const DELIVERY_START = Date.now() + 2 * ONE_DAY;
export const DELIVERY_END = DELIVERY_START + DELIVERY_DATE * ONE_DAY;

export const LIST_OF_COUNTRIES = [
  {
    id: 1,
    country: 'AMERICA',
  },
  {
    id: 2,
    country: 'CANADA',
  },
  {
    id: 3,
    country: 'GERMANY',
  },
  {
    id: 4,
    country: 'BELARUS',
  },
];
export const LABEL = {
  NAME_INPUT: {
    htmlFor: 'name',
    classNames: ['text-label'],
    labelText: '1.Write your name,surname and zip-code.',
  },

  SELECT_INPUT: {
    labelText: '2.Select your delivery adress.',
    htmlFor: 'country',
    classNames: ['select-label'],
  },
  RADIO_GROUP: {
    labelText: '3.Select brand to get a random device.',
    htmlFor: 'brand',
    classNames: ['radio-label'],
  },
  DATE_INPUTE: {
    labelText: '4.Select date to your delivery.',
    htmlFor: 'date',
    classNames: ['date-label'],
  },
  UPLOADER: {
    labelText: '5.Choose your photo for gift card!',
    htmlFor: 'uploader',
    classNames: ['uploader-leabel'],
  },
  CHECKBOX: {
    labelText: '6. Accept the agreement that you get a random device!',
    htmlFor: 'checkbox',
    classNames: ['checkbox-label'],
  },
};

export const BRANDS = {
  APPLE: 'Apple',
  SAMSUNG: 'Samsung',
  HUAWEI: 'Huawei',
};
