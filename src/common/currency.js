const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
});

export const format = formatter.format;
