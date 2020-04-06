export const intervals = 301;

const generateAmount = (_, index) => {
    const min = 100000 * index / intervals;
    const diff = min * 0.2 * Math.random();
    return Math.floor(min + diff);
}

export const getPension = () => Array.from({ length: intervals }, generateAmount);

