import { chart } from "../../common/svgDimensions";

const calcX = (minInterval, maxInterval) => {
  const numIntervals = maxInterval - minInterval;
  // assuming months
  let units = 1;
  let numUnits = Math.floor((numIntervals - 1) / 12);
  while (numUnits > 5) {
    units++;
    numUnits = Math.floor((numIntervals - 1) / (12 * units));
  }
  const intervals = Array.from(
    { length: numUnits },
    (_, index) => minInterval + index * units * 12
  );
  intervals.push(maxInterval);

  return {
    intervals,
    intervalWidth: chart.width / numIntervals,
  };
};

const calcY = (products) => {
  const maxProductValue = Math.max(...products.flat());
  const maxLines = 5;
  const multipliers = [1, 1, 2, 3, 4, 5, 8, 8, 10, 10, 10];
  const minimumInterval = maxProductValue / maxLines;
  const magnitude = Math.pow(10, Math.floor(Math.log10(minimumInterval)));
  const residual = Math.ceil(minimumInterval / magnitude);
  const interval = magnitude * multipliers[residual];
  const numLines = Math.ceil(maxProductValue / interval);
  const intervals = Array.from(
    { length: numLines },
    (_, index) => (index + 1) * interval
  );
  const max = intervals[intervals.length - 1];
  return {
    interval,
    intervals,
    max,
    unitHeight: chart.height / max,
  };
};

export const calculateScale = products => {
  const { minInterval, maxInterval, visible } = products;
  return {
    minInterval,
    maxInterval,
    x: calcX(minInterval, maxInterval),
    y: calcY(visible.map(product => product.data)),
  };
};
