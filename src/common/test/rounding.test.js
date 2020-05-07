import { test } from 'tap';
import { roundDownNicely, roundUpNicely } from '../rounding';

test('roundUpNicely - multiples of 10', t => {
  [0, 10, 100, 1000, 10000, 100000, 1000000].forEach(v => {
    t.equal(roundUpNicely(v), v);
  });
  t.end();
});

test('roundUpNicely - next magnitude', t => {
  [
    [4, 4],
    [8, 8],
    [45, 50],
    [84, 90],
    [85, 90],
    [900, 900],
    [280, 300],
    [901, 1000],
    [3500, 4000],
    [8500, 9000],
    [84000, 90000],
    [56000, 60000],
    [120000, 120000],
    [121000, 130000],
    [404000, 500000],
    [902000, 1000000],
  ].forEach(([value, rounded]) => {
    t.equal(roundUpNicely(value), rounded);
  });
  t.end();
});

test('roundDown - multiples of 10', t => {
  [0, 10, 100, 1000, 10000, 100000, 1000000].forEach(v => {
    t.equal(roundDownNicely(v), v);
  });
  t.end();
});

test('roundDownNicely - next magnitude', t => {
  [
    [4, 4],
    [8, 8],
    [45, 40],
    [84, 80],
    [85, 80],
    [89, 80],
    [900, 900],
    [280, 200],
    [901, 900],
    [3500, 3000],
    [8500, 8000],
    [84000, 80000],
    [56000, 50000],
    [404000, 400000],
    [902000, 900000],
  ].forEach(([value, rounded]) => {
    t.equal(roundDownNicely(value), rounded);
  });
  t.end();
});