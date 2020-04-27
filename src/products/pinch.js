import {
  fromEventToPinchCoords,
  fromSVGCoordsToInterval,
} from '../common/coords';
import visible from './visible';

let debounce;

const pinch = state => {
  if (!debounce) return state;
  const { startEvent, endEvent } = debounce;
  if (!endEvent) return state;
  const { all, minInterval, maxInterval, totalIntervals } = state;
  const currentRange = maxInterval - minInterval;
  const p1 = fromEventToPinchCoords(startEvent);
  const p2 = fromEventToPinchCoords(endEvent);
  const ratio = (p1.x2 - p1.x1) / (p2.x2 - p2.x1);
  const range = Math.ceil(currentRange * ratio);
  if (range > totalIntervals) {
    return {
      ...state,
      minInterval: 0,
      maxInterval: totalIntervals,
      showLeftBreakpoint: false,
      showRightBreakpoint: false,
      visible: all,
    };
  }
  const midInterval = fromSVGCoordsToInterval({
    x: p2.x1 + 0.5 * (p2.x1 - p2.x2),
  });
  const min = Math.floor(midInterval - range / 2);
  const pinched = {
    minInterval: min,
    maxInterval: min + range,
  };
  if (pinched.minInterval <= 0) {
    pinched.minInterval = 0;
    pinched.maxInterval = range;
  }
  if (pinched.maxInterval > totalIntervals) {
    pinched.minInterval = totalIntervals - range;
    pinched.maxInterval = totalIntervals;
  }
  pinched.showLeftBreakpoint = pinched.minInterval !== 0;
  pinched.showRightBreakpoint = pinched.maxInterval !== totalIntervals;
  return {
    ...state,
    ...pinched,
    visible: visible(all, pinched.minInterval, pinched.maxInterval),
  };
};

export default (products, event) => {
  if (debounce) {
    debounce.endEvent = event;
  } else {
    debounce = {
      startEvent: event,
    };
    setTimeout(() => {
      products.update(pinch);
      debounce = undefined;
    }, 32);
  }
};
