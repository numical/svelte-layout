import { get, writable } from 'svelte/store';
import { getProducts, intervals } from '../data/personalFinancialModel';
import { fromEventToPinchCoords, fromSVGCoordsToInterval } from '../common/coords';

const initialValues = {
  dateLineX: 0,
  minInterval: 0,
  maxInterval: intervals,
};
const colours = ['darkblue', 'blue', 'cornflowerblue', 'lightblue'];

const all = getProducts().map((product, id) => ({
  ...product,
  id,
  colour: colours[id % colours.length],
  visible: true,
}));

const getVisible = ({ minInterval, maxInterval }) =>
  all.map(product => ({
    ...product,
    data:
      maxInterval === product.data.length
        ? product.data.slice(minInterval)
        : product.data.slice(minInterval, maxInterval),
  }));

const pinch = state => {
  if (!debounce) return state;
  const { startEvent, endEvent } = debounce;
  if (!endEvent) return state;
  const { minInterval, maxInterval } = state;
  const currentRange = maxInterval - minInterval;
  const p1 = fromEventToPinchCoords(startEvent);
  const p2 = fromEventToPinchCoords(endEvent);
  const ratio = (p1.x2 - p1.x1) / (p2.x2 - p2.x1);
  const range = Math.ceil(currentRange * ratio);
  if (range > intervals) {
    return {
      ...state,
      minInterval: 0,
      maxInterval: intervals,
      visible: all
    }
  }
  const midInterval = fromSVGCoordsToInterval({ x: p2.x1 + 0.5 * (p2.x1 - p2.x2) });
  const min = Math.floor(midInterval - range / 2);
  const pinched = {
    minInterval: min,
    maxInterval: min + range
  };
  if (pinched.minInterval < 0) {
    pinched.minInterval = 0;
    pinched.maxInterval = range;
  }
  if (pinched.maxInterval  > intervals) {
    pinched.minInterval = intervals - range;
    pinched.maxInterval  = intervals;
  }
  return  {
    ...state,
    ...pinched,
    visible: getVisible(pinched)
  };
};

let debounce;

export const products = writable({
  all,
  visible: getVisible(initialValues),
  highlighted: undefined,
  ...initialValues,
  highlightProduct: product => {
    products.update(state => ({
      ...state,
      highlighted: product,
    }));
  },
  noHighlight: () => {
    products.update(state => ({
      ...state,
      highlighted: undefined,
    }));
  },
  pinch: event => {
    if (debounce) {
      debounce.endEvent = event;
    } else {
      debounce = {
        startEvent: event
      };
      setTimeout(() => {
        products.update(pinch);
        debounce = undefined;
      }, 32);
    }
  }
});
