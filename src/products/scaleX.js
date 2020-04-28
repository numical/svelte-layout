import { breakpoint, chart } from '../common/svgDimensions';

export default (minInterval, maxInterval, totalIntervals) => {
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

  const showOriginBreakpoint = minInterval !== 0;
  const showEndBreakpoint = maxInterval != totalIntervals;
  const chartWidth =
    chart.width -
    (showOriginBreakpoint ? breakpoint.width : 0) -
    (showEndBreakpoint ? breakpoint.width : 0);
  return {
    intervals,
    intervalWidth: chartWidth / numIntervals,
    showOriginBreakpoint,
    showEndBreakpoint,
  };
};
