import numeral from 'numeral';

const formatCurrency = (value: string) => {
  let tmp = `${value}` || '';

  if (tmp !== '') {
    tmp = tmp.replace(/[^\d.]+/g, '');
    tmp = `${numeral(value).format('0,0')} đ`;
  }

  return tmp;
};

export { formatCurrency };
