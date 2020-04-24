import { writable } from 'svelte/store';
import { getProducts, intervals } from '../data/personalFinancialModel';

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
  pinch: () => {
    console.log('Graph pinched.');
  }
});
