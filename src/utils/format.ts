export const formatMoney = (number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

export const formatPercentage = (original_price, current_price) => {
  return `${(
    ((current_price - original_price) / original_price) *
    100
  ).toFixed()}%`;
};
