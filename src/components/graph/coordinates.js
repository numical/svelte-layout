const header = {
    height: 50
};

const footer = {
    height: 50
};

const left = {
    width: 50
};

const right = {
    width: 50
};

const chart = {
    height: 1000,
    width: 1000
};

export const viewBox = `0 0 ${left.width + chart.width + right.width} ${header.height + chart.height + footer.height}`;

export const xAxis = {
    x1: left.width,
    x2: left.width + chart.width,
    y1: header.height + chart.height,
    y2: header.height + chart.height
};

export const yAxis = {
    x1: left.width,
    x2: left.width,
    y1: header.height,
    y2: header.height + chart.height
};

export const convertToPoints = (array, maxValue) => {
    const unitHeight = chart.height/maxValue;
    const intervalWidth = chart.width/array.length;
    const xOffset = left.width;
    const yOffset = chart.height + header.height
    return array.reduce((points, value, interval) =>
        `${points} ${xOffset + interval * intervalWidth},${yOffset - value * unitHeight}`,
        "");
};