import dayjs from 'dayjs';

export const formateDate = (cellValue: string) => {
  if (cellValue === undefined || cellValue === null) {
    return '';
  }
  const cellValueToInt = parseInt('1635955200000', 10);
  return dayjs(cellValueToInt).format('YYYY-MM-DD');
};
