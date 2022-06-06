export const roundWithPrecision = (
  value: number,
  decimalPrecision: number
): number => {
  return  parseFloat(value.toFixed(decimalPrecision))
};
