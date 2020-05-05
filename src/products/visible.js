export default (all, minInterval, maxInterval) =>
  all.reduce((visible, product) => {
    if (product.visible) {
      visible.push({
        ...product,
        data:
          maxInterval === product.data.length
            ? product.data.slice(minInterval)
            : product.data.slice(minInterval, maxInterval),
      });
    }
    return visible;
  }, []);
