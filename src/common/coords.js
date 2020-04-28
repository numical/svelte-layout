import { chart, left } from './svgDimensions';
import { intervals } from '../data/personalFinancialModel';

let svg;
let pt;

const getSVG = () => {
  if (!svg) {
    svg = document.getElementById('svg');
  }
  return svg;
};

const getMatrix = () =>
  getSVG()
    .getScreenCTM()
    .inverse();

const getPoint = () => {
  if (!pt) {
    pt = getSVG().createSVGPoint();
  }
  return pt;
};

export const fromEventToDomCoords = (event, touchIndex = 0) => ({
  x: event.clientX || event.touches[touchIndex].clientX,
  y: event.clientY || event.touches[touchIndex].clientY,
});

export const fromEventToPinchCoords = event => {
  const c1 = fromEventToDomCoords(event, 0);
  const c2 = fromEventToDomCoords(event, 1);
  return {
    x1: c1.x,
    x2: c2.x,
    y1: c1.y,
    y2: c2.y,
  };
};

export const fromDomToSVGCoords = coords => {
  const pt = getPoint();
  pt.x = coords.x;
  pt.y = coords.y;
  const { x, y, ...rest } = pt.matrixTransform(getMatrix());
  return { x, y };
};

export const fromEventToSVGCoords = event => {
  const coords = fromEventToDomCoords(event);
  return fromDomToSVGCoords(coords);
};
