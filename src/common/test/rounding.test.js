import { test } from 'tap';
import { roundUpNicely, roundDownNicely } from '../rounding';

test('roundUpNicely', t => {
  [0, 10, 100, 1000, 10000, 100000, 1000000].forEach(v => {
    t.equal(roundUpNicely(v), v, `pure powers of 10 are returned: ${v}`);
  });

  [50, 300, 7000, 40000, 600000, 9000000].forEach(v => {
    t.equal(
      roundUpNicely(v),
      v,
      `multiples of powers of 10 are returned: ${v}`
    );
  });

  [
    [24, 24],
    [45, 45],
    [55, 55],
    [240, 240],
    [242, 250],
    [340, 340],
    [839, 840],
    [1050, 1100],
    [4050, 4100],
    [7050, 7100],
    [15700, 16000],
    [45700, 46000],
    [55000, 55000],
    [55324, 56000],
    [65700, 66000],
    [101000, 110000],
    [251000, 260000],
    [2090000, 2100000],
    [4090000, 4100000],
    [601000, 610000],
    [9090000, 9100000],
  ].forEach(([v, r]) => {
    t.equal(
      roundUpNicely(v),
      r,
      `rounds to next tenth of magnitude: ${v} => ${r}`
    );
  });

  t.end();
});

test('roundDownNicely', t => {
  [0, 10, 100, 1000, 10000, 100000, 1000000].forEach(v => {
    t.equal(roundDownNicely(v), v, `pure powers of 10 are returned: ${v}`);
  });

  [50, 300, 7000, 40000, 600000, 9000000].forEach(v => {
    t.equal(
      roundDownNicely(v),
      v,
      `multiples of powers of 10 are returned: ${v}`
    );
  });

  [
    [24, 24],
    [45, 45],
    [55, 55],
    [240, 240],
    [242, 240],
    [340, 340],
    [839, 830],
    [1050, 1000],
    [4050, 4000],
    [7050, 7000],
    [15700, 15000],
    [45700, 45000],
    [55000, 55000],
    [55324, 55000],
    [65700, 65000],
    [101000, 100000],
    [251000, 250000],
    [2090000, 2000000],
    [4090000, 4000000],
    [601000, 600000],
    [9090000, 9000000],
  ].forEach(([v, r]) => {
    t.equal(
      roundDownNicely(v),
      r,
      `rounds to previous tenth of magnitude: ${v} => ${r}`
    );
  });

  t.end();
});
