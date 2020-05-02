import calcScaleX from './scaleX';
import calcScaleY from './scaleY';
import calcVisible from './visible';

export default (state, desiredMin, desiredMax) => {
  const { all, totalIntervals } = state;
  const range = desiredMax - desiredMin;
  if (range > totalIntervals) {
    throw new Error(`Invalid interval range: ${desiredMin} to ${desiredMax}`);
  }
  let minInterval = desiredMin < 0 ? 0 : desiredMin;
  let maxInterval = desiredMin + range;
  if (maxInterval > totalIntervals) {
    maxInterval = totalIntervals;
    minInterval = totalIntervals - range;
  }
  const visible = calcVisible(all, minInterval, maxInterval);
  return {
    ...state,
    minInterval,
    maxInterval,
    scaleX: calcScaleX(
      minInterval,
      maxInterval,
      totalIntervals
    ),
    scaleY: calcScaleY(visible),
    visible,
  }
}