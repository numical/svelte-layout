import { domCoordDelta } from '../common/coords';
import { identifySwipe } from "./swipes";

const Type = {
  UNKNOWN: Symbol("unknown"),
  DRAG: Symbol("drag"),
  SWIPE: Symbol("swipe"),
  PINCH: Symbol("pinch"),
}

const getX = event => event.clientX || event.touches[0].clientX;

const isPinch = event => event.touches && event.touches.length === 2;

const isSwipe = (event1, event2) => domCoordDelta(event1, event2) > 15;

let currentGesture = undefined;

export const start = (action, startEvent) => {
  if (!currentGesture) {
    currentGesture = {
      action,
      startEvent,
      type: Type.UNKNOWN,
    };
    console.log('to Unknown');
  }
};

export const move = moveEvent => {
  if (currentGesture) {
    const { action, startEvent } = currentGesture;
    if (currentGesture.type === Type.UNKNOWN) {
      if (isPinch(moveEvent)) {
        currentGesture.type = Type.PINCH;
      } else if (isSwipe(startEvent, moveEvent)){
        currentGesture.type = Type.SWIPE;
      } else {
        currentGesture.type = Type.DRAG;
      }
      console.log(`Unknown to ${currentGesture.type.toString()}`);
    }
    if (currentGesture.type !== Type.SWIPE) {
      action(moveEvent);
    }
  }
}

export const stop = stopEvent => {
  try {
    if (currentGesture) {
      const {action, startEvent, type} = currentGesture;
      if (type === Type.SWIPE) {
        action(identifySwipe(startEvent, stopEvent));
      }
    }
  } finally {
    currentGesture = undefined;
    console.log('to undefined');
  }
}
