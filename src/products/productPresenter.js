import { writable } from 'svelte/store';
import initialValues from './initialValues';
import pinch from './pinch';

export const products = writable({
  ...initialValues(),
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
  pinch: event => pinch(products, event),
});
