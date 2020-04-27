import { getProducts, intervals } from '../data/personalFinancialModel';
import colours from './colours';
import visible from './visible';

export default () => {
  const all = getProducts().map((product, id) => ({
    ...product,
    id,
    colour: colours[id % colours.length],
    visible: true,
  }));

  return {
    all,
    visible: visible(all, 0, intervals),
    dateLineX: 0,
    highlighted: undefined,
    minInterval: 0,
    maxInterval: intervals,
    showLeftBreakpoint: false,
    showRightBreakpoint: false,
    totalIntervals: intervals,
  };
};
