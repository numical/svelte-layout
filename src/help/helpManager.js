import { writable } from 'svelte/store';
import { fromEventToDomCoords } from '../common/coords';

export const help = writable({
  currentFocus: 'default',
  currentPosition: undefined,
  setFocus: (focus, event) =>
    help.update(state => ({
      ...state,
      currentFocus: focus,
      currentPosition: event ? fromEventToDomCoords(event) : undefined,
    })),
  loseFocus: () =>
    help.update(state => ({
      ...state,
      currentFocus: 'default',
      currentPosition: undefined,
    })),
});
