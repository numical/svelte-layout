export const roundUpNicely = value => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const nextMagnitude = 10 * magnitude;
  return value === magnitude
    ? value
    : value % magnitude === 0
    ? value
    : (value / nextMagnitude) < 0.25
      ? nextMagnitude * 0.25
    : (value / nextMagnitude) < 0.5
    ? nextMagnitude * 0.5
    : nextMagnitude;
};
