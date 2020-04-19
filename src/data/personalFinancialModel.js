export const intervals = 301;

const generateAmount = (min, max, volatility, _, index) => {
  const indexMin = min + (max * index) / intervals;
  const diff = index === 0 ? 0 : indexMin * volatility * Math.random();
  return Math.floor(indexMin + diff);
};

const generateData = (min, max, volatility) =>
  Array.from(
    { length: intervals },
    generateAmount.bind(null, min, max, volatility)
  );

export const getProducts = () => [
  {
    name: "Pension",
    data: generateData(0, 100000, 0.1),
  },
  {
    name: "Savings",
    data: generateData(5000, 30000, 0.05),
  },
  {
    name: "Investments",
    data: generateData(10000, 75000, 0.3),
  },
];
