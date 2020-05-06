import { roundDownNicely, roundUpNicely } from '../common/rounding';
import { chart } from '../common/svgDimensions';

export default products => {
  const allValues = products.map(product => product.data).flat();
  const maxValue = roundUpNicely( Math.max(...allValues));
  const minValue = roundDownNicely(Math.min(...allValues));
  const maxLines = 8;
  const multipliers = [1, 1, 2, 3, 4, 5, 8, 8, 10, 10, 10];
  const minimumInterval = (maxValue - minValue) / maxLines;
  const magnitude = Math.pow(10, Math.floor(Math.log10(minimumInterval)));
  const residual = Math.ceil(minimumInterval / magnitude);
  const interval = magnitude * multipliers[residual];
  const numLines = Math.ceil(maxValue / interval);
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

