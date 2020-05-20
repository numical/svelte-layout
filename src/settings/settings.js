import { writable } from 'svelte/store';
import { meta } from './meta';

const initialiseValue = (meta, [key, { defaultValue }]) => {
  meta[key] = defaultValue;
  return meta;
}

export const settings = writable(Object.entries(meta).reduce(initialiseValue, { meta }));

export const getMeta = setting => meta[setting];