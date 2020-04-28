import { chart } from '../common/svgDimensions';

export default products => {
  const maxProductValue = Math.max(
    ...products.map(product => product.data).flat()
  );
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
