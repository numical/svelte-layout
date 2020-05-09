import { writable } from 'svelte/store';
import { identifySwipe } from './swipes';

export const DRAG = Symbol('drag');
export const SWIPE = Symbol('swipe');
export const PINCH = Symbol('pinch');
export const WHEEL = Symbol('wheel');

const UNKNOWN = Symbol('unknown');
const SWIPE_OR_DRAG = Symbol('swipe or drag');

const isPinch = event => event.touches && event.touches.length === 2;

let currentGesture = undefined;

export const debug = writable();

export const start = (actions, startEvent) => {
  if (!currentGesture || currentGesture.type === WHEEL) {
    if (actions[SWIPE] && actions[DRAG]) {
      throw new Error('Unsupported gesture alternatives - swipe and drag.');
    }
    currentGesture = {
      actions,
      startEvent,
      type: UNKNOWN,
    };
    debug.update(() => 'Start indeterminate gesture');
  }
};

export const wheel = (actions, event) => {
  if (!currentGesture) {
    currentGesture = {
      actions,
      type: WHEEL,
    }
    debug.update(() => 'Wheel gesture');
  } else {
    const { actions, type } = currentGesture;
    if (type === WHEEL && actions[WHEEL]) {
      actions[WHEEL](event);
    }
  }
}

export const move = moveEvent => {
  if (currentGesture) {
    const { actions, startEvent } = currentGesture;
    if (currentGesture.type === UNKNOWN) {
      if (isPinch(moveEvent)) {
        currentGesture.type = PINCH;
        debug.update(() => 'Move - determine pinch');
      } else {
        currentGesture.type = SWIPE_OR_DRAG;
        debug.update(() => 'Move - determine swipe or drag');
      }
    }
    switch (currentGesture.type) {
      case PINCH:
        debug.update(() => 'Move - pinch');
        actions[PINCH] && actions[PINCH](moveEvent);
        break;
      case SWIPE_OR_DRAG:
        debug.update(() => 'Move - swipe or drag');
        actions[DRAG] && actions[DRAG](moveEvent);
        break;
      default:
      // do nothing
    }
  }
};

export const stop = stopEvent => {
  if (currentGesture) {
    const { actions, startEvent, type } = currentGesture;
    if (type === SWIPE_OR_DRAG && actions[SWIPE]) {
      actions[SWIPE](identifySwipe(startEvent, stopEvent));
    }
  }
  currentGesture = undefined;
  debug.update(() => undefined);
};
