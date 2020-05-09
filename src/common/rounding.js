const round = (roundFn, granularity, value) => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const ratio = Math.floor(value / magnitude);
  return value === magnitude
    ? value
    : value % magnitude === 0
      ? value
      : roundFn(value * granularity / magnitude) * (magnitude) / granularity;
};

export const roundUpBroadly = round.bind(null, Math.ceil, 1);

export const roundUpNicely = round.bind(null, Math.ceil, 10);

export const roundDownNicely = round.bind(null, Math.floor, 10);
