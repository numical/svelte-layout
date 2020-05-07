import { test } from 'tap';
import { roundUpNicely } from '../round';

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
    [55, 100],
    [840, 1000],
    [7050, 10000],
    [65700, 100000],
    [601000, 1000000],
    [9090000, 10000000],
  ].forEach(([v, r]) => {
    t.equal(
      roundUpNicely(v),
      r,
      `more than half way to next magnitude, return next magnitude: ${v} => ${r}`
    );
  });

  [
    [24, 25],
    [240, 250],
    [1050, 2500],
    [15700, 25000],
    [101000, 250000],
    [2090000, 2500000],
  ].forEach(([v, r]) => {
    t.equal(
      roundUpNicely(v),
      r,
      `less than quarter way to next magnitude, return quarter next magnitude: ${v} => ${r}`
    );
  });

  [
    [45, 50],
    [340, 500],
    [4050, 5000],
    [45700, 50000],
    [251000, 500000],
    [4090000, 5000000],
  ].forEach(([v, r]) => {
    t.equal(
      roundUpNicely(v),
      r,
      `less than half way to next magnitude, return  half next magnitude: ${v} => ${r}`
    );
  });

  t.end();
});
