import { writable } from 'svelte/store';
import initialValues from './initialValues';
import pinch from './pinch';
import affectIntervalChange from './affectIntervalChange';
import calcVisible from './visible';
import scaleY from './scaleY';

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
  scrollLeft: () => {
    products.update(state => {
      const { minInterval, maxInterval } = state;
      return affectIntervalChange(
        state,
        2 * minInterval - maxInterval,
        minInterval
      )
    });
  },
  scrollRight: () => {
    products.update(state => {
      const { minInterval, maxInterval } = state;
      return affectIntervalChange(
        state,
        maxInterval,
        2 * maxInterval - minInterval
      )
    });
  },
  toggleVisibility: product => {
    products.update(state => {
      product.visible = !product.visible;
      const visible =  calcVisible(state.all, state.minInterval, state.maxInterval);
      return {
        ...state,
        // scaleY: scaleY(visible),
        visible
      }
    });
  }
});
