export const intervals = 301;

const generateAmount = (max, volatility, _, index) => {
    const min = max * index / intervals;
    const diff = min * volatility * Math.random();
    return Math.floor(min + diff);
}

const generateData = (max, volatility) => Array.from({ length: intervals }, generateAmount.bind(null, max, volatility));

const getPensionData = () => generateData(100000, 0.2);

const getSavingsData = () => generateData(30000, 0.1);

export const getProducts = () => [
    {
        name: 'Pension',
        data: getPensionData()
    },
    {
        name: 'Savings',
        data: getSavingsData()
    }
];

export const getStartDate = () => new Date(2020, 0, 1);

