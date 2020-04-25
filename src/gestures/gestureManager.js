import { fromEventToDomCoords } from '../common/coords';
import { identifySwipe } from './swipes';

export const DRAG = Symbol('drag');
export const SWIPE = Symbol('swipe');
export const PINCH = Symbol('pinch');

const UNKNOWN = Symbol('unknown');
const SWIPE_OR_DRAG = Symbol('swipe or drag');

const isPinch = event => event.touches && event.touches.length === 2;

let currentGesture = undefined;

export const start = (actions, startEvent) => {
  if (!currentGesture) {
    if (actions[SWIPE] && actions[DRAG]) {
      throw new Error('Unsupported gesture alternatives - swipe and drag.');
    }
    currentGesture = {
      actions,
      startEvent,
      type: UNKNOWN,
    };
  }
};

export const move = moveEvent => {
  if (currentGesture) {
    const { actions, startEvent } = currentGesture;
    if (currentGesture.type === UNKNOWN) {
      if (isPinch(moveEvent)) {
        currentGesture.type = PINCH;
      } else {
        currentGesture.type = SWIPE_OR_DRAG;
      }
    }
    switch (currentGesture.type) {
      case PINCH:
        actions[PINCH]
          && currentGesture.previousEvent
          && actions[PINCH](currentGesture.previousEvent, moveEvent);
        currentGesture.previousEvent = moveEvent;
        break;
      case SWIPE_OR_DRAG:
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
};
