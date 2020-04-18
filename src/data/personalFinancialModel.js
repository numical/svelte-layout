export const intervals = 301;

const generateAmount = (max, volatility, _, index) => {
    const min = max * index / intervals;
    const diff = min * volatility * Math.random();
    return Math.floor(min + diff);
}

const generateData = (max, volatility) => Array.from({ length: intervals }, generateAmount.bind(null, max, volatility));

export const getProducts = () => [
    {
        name: 'Pension',
        data: generateData(100000, 0.1)
    },
    {
        name: 'Savings',
        data: generateData(30000, 0.05)
    },
    {
        name: 'Investments',
        data: generateData(75000, 0.3)
    }
];

