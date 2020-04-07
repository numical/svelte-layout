import { chart } from './dimensions';

const calcX = products => {
    const numIntervals = products[0].length;
    const intervals = [0, numIntervals * 0.25, numIntervals * 0.5, numIntervals * 0.75, numIntervals].map(i => Math.floor(i));
    return {
        intervals,
        intervalWidth: chart.width / numIntervals
    }
}

const calcY = products => {
    const maxProductValue = Math.max(...products.flat());
    const maxLines = 5;
    const multipliers = [1, 1, 2, 3, 4, 5, 8, 8, 10, 10, 10];
    const minimumInterval = maxProductValue / maxLines;
    const magnitude = Math.pow(10, Math.floor(Math.log10(minimumInterval)));
    const residual = Math.ceil(minimumInterval / magnitude);
    const interval = magnitude * multipliers[residual];
    const numLines = Math.ceil(maxProductValue / interval);
    const intervals = Array.from({length: numLines}, (_, index) => (index + 1) * interval);
    const max = intervals[intervals.length - 1];
    return {
        interval,
        intervals,
        max,
        unitHeight: chart.height / max
    }
}

export const calculateScale = products => ({
    x: calcX(products),
    y: calcY(products)
});