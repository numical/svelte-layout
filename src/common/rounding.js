const round = (ratioRoundingFn, value) => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  if (magnitude === value) {
    return value;
  } else {
    const ratio = value / magnitude;
    if (ratio === 1) {
      return value;
    } else if (ratio < 2) {
      return magnitude + ratioRoundingFn((ratio - 1) * magnitude) ;
    } else {
      return magnitude * ratioRoundingFn(ratio);
    }
  }
}

export const roundUpNicely = round.bind(null, Math.ceil);

export const roundDownNicely = round.bind(null, Math.floor);

