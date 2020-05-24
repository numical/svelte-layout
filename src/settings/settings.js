import { writable } from 'svelte/store';
import { meta } from './meta';
import { getSettings, saveSettings } from '../storage/localStorage';
import { delayedAction } from '../common/delayedAction';

const set = (key, value) =>
  settings.update(state => {
    const newState = {
      ...state,
      [key]: value,
    };
    delayedAction(0, () => {
      const { meta, set, ...toSave } = newState;
      saveSettings({ ...toSave });
    });
    return newState;
  });

const initialiseValue = (meta, [key, { defaultValue }]) => {
  meta[key] = defaultValue;
  return meta;
};

const initial = {
  meta,
  set,
  ...Object.entries(meta).reduce(initialiseValue, {}),
};

// in case setting keys change, don't just blindly copy in stored values
Object.entries(getSettings()).forEach(([key, value]) => {
  if (initial[key] !== undefined) {
    initial[key] = value;
  }
});

export const settings = writable(initial);
