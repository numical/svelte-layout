import { writable } from 'svelte/store';
import { meta } from './meta';

const initialiseValue = (meta, [key, { defaultValue }]) => {
  meta[key] = defaultValue;
  return meta;
}

const base = {
  meta,
  set: (key, value) => settings.update( state => ({
    ...state,
    [key]: value
  }))
}

export const settings = writable(Object.entries(meta).reduce(initialiseValue, base));

