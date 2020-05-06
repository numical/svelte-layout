const round = (ratioRoundingFn, value) => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  if (magnitude === value) {
    return value;
  } else {
    const ratio = value / magnitude;
    const fudge = ratio < 2 ? 0.75 : 1;
    const roundedRatio = ratioRoundingFn(ratio);
    return magnitude * roundedRatio * fudge;
  }
}

export const roundUpNicely = round.bind(null, Math.ceil);

export const roundDownNicely = round.bind(null, Math.floor);

