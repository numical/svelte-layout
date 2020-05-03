import calcScaleX from './scaleX';
import calcScaleY from './scaleY';
import calcVisible from './visible';

export default (state, desiredMin, desiredMax) => {
  const { all, totalIntervals } = state;
  // min range is 12 << assuming months
  const range = desiredMax - desiredMin > 12 ? desiredMax - desiredMin : 12;
  if (range > totalIntervals) {
    return {
      ...state,
      minInterval: 0,
      maxInterval: totalIntervals,
      scaleX: calcScaleX(0, totalIntervals, totalIntervals),
      scaleY: calcScaleY(all),
      visible: all,
    };
  } else {
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
}