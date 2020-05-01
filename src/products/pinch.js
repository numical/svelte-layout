import { fromEventToPinchCoords } from '../common/coords';
import calcScaleX from './scaleX';
import calcScaleY from './scaleY';
import calcVisible from './visible';

const isWheelEvent = event => event.deltaY !== undefined;

const calcWheelZoom = (state, event) => {
  const { minInterval, maxInterval } = state;
  const { deltaX, deltaY } = event;
  const delta = deltaX === 0 ? deltaY : deltaX;
  const ratio = delta > 0 ? 0.9 : 1.1;
  const midInterval = Math.floor((maxInterval - minInterval) / 2);
  return { ratio, midInterval };
};

const calcMouseZoom = (state, startEvent, endEvent) => {
  const p1 = fromEventToPinchCoords(startEvent);
  const p2 = fromEventToPinchCoords(endEvent);
  const ratio = (p1.x2 - p1.x1) / (p2.x2 - p2.x1);
  const midInterval = state.scaleX.fromSVGCoordsToInterval({
    x: p2.x1 + 0.5 * (p2.x1 - p2.x2),
  });
  return { ratio, midInterval };
};

const calcScale = (state, { ratio, midInterval }) => {
  const { all, minInterval, maxInterval, totalIntervals } = state;
  const currentRange = maxInterval - minInterval;
  const range = Math.ceil(currentRange * ratio);
  if (range > totalIntervals) {
    return {
      ...state,
      minInterval: 0,
      maxInterval: totalIntervals,
      scaleX: calcScaleX(0, totalIntervals, totalIntervals),
      scaleY: calcScaleY(all),
      visible: all,
    };
  }
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
  const visible = calcVisible(all, pinched.minInterval, pinched.maxInterval);
  return {
    ...state,
    ...pinched,
    scaleX: calcScaleX(
      pinched.minInterval,
      pinched.maxInterval,
      totalIntervals
    ),
    scaleY: calcScaleY(visible),
    visible,
  };
};

let debounce;

const debouncedFn = products => () => {
  if (!debounce) return;
  const { startEvent, endEvent } = debounce;
  if (!startEvent) return;
  const isWheel = isWheelEvent(startEvent);
  if (!isWheel && !endEvent) return;
  products.update(state => {
    const zoom = isWheel
      ? calcWheelZoom(state, startEvent)
      : calcMouseZoom(state, startEvent, endEvent);
    return calcScale(state, zoom);
  });
  debounce = undefined;
};

export default (products, event) => {
  if (debounce) {
    debounce.endEvent = event;
  } else {
    debounce = {
      startEvent: event,
    };
    setTimeout(debouncedFn(products), 32);
  }
};
