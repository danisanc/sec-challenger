export const formatMoney = (number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

export const formatPercentage = (percentage) => {
  return `- ${percentage.toFixed()}%`;
};
