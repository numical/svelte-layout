import { writable } from 'svelte/store';

export const help = writable({
  currentFocus: 'default',
  setFocus: focus =>
    help.update(state => ({
      ...state,
      currentFocus: focus,
    })),
  loseFocus: () =>
    help.update(state => ({
      ...state,
      currentFocus: 'default',
    })),
});
