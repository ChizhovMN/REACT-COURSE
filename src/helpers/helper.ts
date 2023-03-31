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

export function formatDate(inputDate: number) {
  const date = new Date(inputDate);
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
