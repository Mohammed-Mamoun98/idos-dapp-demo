const handleHasComma = (num: string): string => {
  if (!num.toString().includes('.')) return num.toString();
  const [main, decimals] = num.toString().split('.');
  return [main, decimals].join(',');
};

export const formatNumber = (num: number | string) => {
  if(num ===  2266.07) debugger
  if (!Number.isFinite(+num)) return 0;
  let strNum = handleHasComma(num.toLocaleString());
  return (strNum).toLocaleString().replace(',', '.');
};
