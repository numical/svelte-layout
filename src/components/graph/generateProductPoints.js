import { getCurvePoints } from '../../common/getCurvePoints';

export const raw = (data, xOffset, yOffset, products) => data.reduce(
  (points, value, interval) =>
    `${points} ${xOffset +
    interval * products.scaleX.intervalWidth},${yOffset -
    (value - products.scaleY.min) * products.scaleY.unitHeight}`,
  ''
);

export const smoothed = (data, xOffset, yOffset, products) => {
  const rawValues = data.reduce((raw, value, interval) => {
    raw.push(xOffset + interval * products.scaleX.intervalWidth);
    raw.push(
      yOffset - (value - products.scaleY.min) * products.scaleY.unitHeight
    );
    return raw;
  }, []);
  const smoothedValues = getCurvePoints(rawValues);
  return smoothedValues.reduce(
    (points, value, index, smoothed) =>
      index % 2 === 1 ? `${points} ${smoothed[index - 1]},${value}` : points,
    ''
  );
}
