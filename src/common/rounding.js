const round = (roundFn, value) => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const ratio = Math.floor(value / magnitude);
  return value === magnitude
    ? value
    : value % magnitude === 0
      ? value
      : roundFn(value * 10 / magnitude) * (magnitude) / 10;
};

export const roundUpNicely = round.bind(null, Math.ceil);

export const roundDownNicely = round.bind(null, Math.floor);
