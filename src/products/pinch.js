import { fromEventToPinchCoords } from '../common/coords';
import affectIntervalChange from './affectIntervalChange';

const isWheelEvent = event => event.deltaY !== undefined;

const calcWheelZoom = (state, event) => {
  const { minInterval, maxInterval } = state.scaleX;
  const { deltaX, deltaY } = event;
  const delta = deltaX === 0 ? deltaY : deltaX;
  const ratio = delta > 0 ? 0.9 : 1.1;
  const midInterval = Math.floor((maxInterval - minInterval) / 2);
  return { ratio, midInterval };
};

const calcMouseZoom = (state, startEvent, endEvent) => {
  const p1 = fromEventToPinchCoords(startEvent);
  const p2 = fromEventToPinchCoords(endEvent);
  let ratio = (p1.x2 - p1.x1) / (p2.x2 - p2.x1);
  ratio = ratio > 1 ? 1.1 : 0.9;
  const midInterval = state.scaleX.fromSVGCoordsToInterval({
    x: p2.x1 + 0.5 * (p2.x1 - p2.x2),
  });
  return { ratio, midInterval };
};

const calcScale = (state, zoomFn, startEvent, endEvent) => {
  const { minInterval, maxInterval } = state.scaleX;
  const { ratio, midInterval } = zoomFn(state, startEvent, endEvent);
  const currentRange = maxInterval - minInterval;
  const range = Math.ceil(currentRange * ratio);
  const min = Math.floor(midInterval - range / 2);
  return affectIntervalChange(state, min, min + range);
};

let debounce;

const debouncedFn = products => () => {
  if (debounce) {
    const { startEvent, endEvent } = debounce;
    if (startEvent) {
      const zoomFn = isWheelEvent(startEvent)
        ? calcWheelZoom
        : endEvent
        ? calcMouseZoom
        : undefined;
      if (zoomFn) {
        products.update(state =>
          calcScale(state, zoomFn, startEvent, endEvent)
        );
      }
    }
    debounce = undefined;
  }
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
