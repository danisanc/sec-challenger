export const getPercentage = (original_price, current_price) => {
  return Math.abs(((current_price - original_price) / original_price) * 100);
};
