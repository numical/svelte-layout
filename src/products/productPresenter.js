import { writable } from 'svelte/store';
import initialValues from './initialValues';
import pinch from './pinch';
import affectIntervalChange from './affectIntervalChange';
import calcVisible from './visible';
import scaleY from './scaleY';
import { InvalidSwipe, SwipeLeft, SwipeRight } from '../gestures/swipes';

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
  resetZoom: () => {
    products.update(state => {
      const { totalIntervals } = state;
      return affectIntervalChange(state, 0, totalIntervals);
    });
  },
  scroll: swipe => {
    if (swipe === InvalidSwipe) return;
    products.update(state => {
      const { minInterval, maxInterval } = state.scaleX;
      const desiredMin =
        swipe === SwipeLeft ? 2 * minInterval - maxInterval : maxInterval;
      const desiredMax =
        swipe === SwipeLeft ? minInterval : 2 * maxInterval - minInterval;
      return affectIntervalChange(state, desiredMin, desiredMax);
    });
  },
  toggleVisibility: product => {
    products.update(state => {
      product.visible = !product.visible;
      const { all, scaleX } = state;
      const { minInterval, maxInterval } = scaleX;
      const visible = calcVisible(all, minInterval, maxInterval);
      return {
        ...state,
        scaleY: scaleY(visible),
        visible,
      };
    });
  },
});
