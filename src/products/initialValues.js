import { getProducts, intervals } from './personalFinancialModel';
import calcScaleX from './scaleX';
import calcScaleY from './scaleY';
import calcVisible from './visible';
import colours from './colours';

export default () => {
  const all = getProducts().map((product, id) => ({
    ...product,
    id,
    colour: colours[id % colours.length],
    visible: true,
  }));
  const minInterval = 0;
  const maxInterval = intervals;
  const totalIntervals = intervals;
  const visible = calcVisible(all, minInterval, maxInterval);
  const scaleX = calcScaleX(minInterval, maxInterval, totalIntervals);
  const scaleY = calcScaleY(all);
  return {
    all,
    dateLineX: 0,
    highlighted: undefined,
    scaleX,
    scaleXForAll: scaleX,
    scaleY,
    scaleYForAll: scaleY,
    showZoomWindow: false,
    totalIntervals,
    visible,
  };
};
