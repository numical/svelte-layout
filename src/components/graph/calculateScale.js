import { chart } from './dimensions';

const calcX = products => {
    const numIntervals = products[0].length;
    // assuming months
    let units = 1;
    let numUnits = Math.floor((numIntervals - 1) / 12);
    while (numUnits > 5) {
        units++;
        numUnits = Math.floor((numIntervals - 1) / (12 * units));
    }
    const intervals = Array.from({ length: numUnits}, (_, index) => index * units * 12);
    intervals.push(numIntervals);

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