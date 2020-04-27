export default (all, minInterval, maxInterval) =>
  all.map(product => ({
    ...product,
    data:
      maxInterval === product.data.length
        ? product.data.slice(minInterval)
        : product.data.slice(minInterval, maxInterval),
  }));
