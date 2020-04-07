export const intervals = 301;

const generateAmount = (max, volatility, _, index) => {
    const min = max * index / intervals;
    const diff = min * volatility * Math.random();
    return Math.floor(min + diff);
}

const getProduct = (max, volatility) => Array.from({ length: intervals }, generateAmount.bind(null, max, volatility));

const getPension = () => getProduct(100000, 0.2);

const getSavings = () => getProduct(30000, 0.1);

export const getProducts = () => [getPension(), getSavings()];

export const getStartDate = () => new Date(2020, 0, 1);

