import { writable } from 'svelte/store';
import { getProducts, intervals } from '../data/personalFinancialModel';
import { fromEventToPinchCoords } from '../common/coords';

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

let eventCount = 0;

const pinch = (event1, event2) => {
  eventCount++;
  console.log(`event: ${eventCount}`);
  const p1 = fromEventToPinchCoords(event1);
  console.log(`p1: ${JSON.stringify(p1)}`);
  const p2 = fromEventToPinchCoords(event2);
  console.log(`p2: ${JSON.stringify(p2)}`);
  const ratio = p1.distance / p2.distance;
  console.log(`Pinch ratio ${ratio}`);
}
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
  pinch
});
