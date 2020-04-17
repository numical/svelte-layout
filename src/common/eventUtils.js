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

export const toCoords = event => ({
    x: event.clientX || event.touches[0].clientX,
    y: event.clientY || event.touches[0].clientY
});

export const toSVGCoords = event => {
    const coords = toCoords(event);
    const pt = getPoint();
    pt.x = coords.x;
    pt.y = coords.y;
    const { x, y, ...rest } = pt.matrixTransform(getMatrix());
    return { x, y };
}