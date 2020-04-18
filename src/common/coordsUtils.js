import { chart, left } from './svgDimensions';
import { intervals } from "../data/personalFinancialModel";

let svg;
let pt;

const getSVG = () => {
    if (!svg) {
        svg = document.getElementById('svg');
    }
    return svg;
};

const getMatrix = () => getSVG().getScreenCTM().inverse();

const getPoint = () => {
    if (!pt) {
        pt = getSVG().createSVGPoint();
    }
    return pt;
}

export const fromEventToDomCoords = event => ({
    x: event.clientX || event.touches[0].clientX,
    y: event.clientY || event.touches[0].clientY
});

export const fromEventToSVGCoords = event => {
    const coords = fromEventToDomCoords(event);
    const pt = getPoint();
    pt.x = coords.x;
    pt.y = coords.y;
    const { x, y, ...rest } = pt.matrixTransform(getMatrix());
    return { x, y };
}

export const fromSVGCoordsToInterval = ({ x }) => {
    const interval = Math.floor((x - left.width) * intervals/chart.width);
    return interval === intervals ? intervals -1 : interval;
}

