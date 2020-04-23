import { InvalidSwipe, SwipeLeft, SwipeRight } from "./swipes";

const DRAG = Symbol("drag");
const SWIPE = Symbol("swipe");
const PINCH = Symbol("pinch");
const NONE = Symbol("none");

const none = {
  type: NONE,
};

const identifySwipe = (start, end) => {
  if (end.timeStamp - start.timeStamp > 500) {
    return InvalidSwipe;
  }

  const yDiff =
    (end.screenY || end.changedTouches[0].screenY) -
    (start.screenY || start.touches[0].screenY);
  if (Math.abs(yDiff) > window.innerHeight / 6) {
    return InvalidSwipe;
  }

  const xDiff =
    (end.screenX || end.changedTouches[0].screenX) -
    (start.screenX || start.touches[0].screenX);
  if (Math.abs(xDiff) < window.innerWidth / 6) {
    return InvalidSwipe;
  } else if (xDiff > 0) {
    return SwipeRight;
  } else {
    return SwipeLeft;
  }
};

let currentGesture = none;

export const startSwipe = (action, startEvent) => {
  if (currentGesture === none) {
    currentGesture = {
      type: SWIPE,
      endAction: (stopEvent) => action(identifySwipe(startEvent, stopEvent)),
    };
  }
};

export const startPinch = (action, startEvent) => {
  if (currentGesture) {
    currentGesture = {
      type: PINCH,
      startEvent,
      moveAction: moveEvent =>
        moveEvent.touches && moveEvent.touches.length === 2 && action(startEvent, action)
    };
  }
};

export const startDrag = (action) => {
  if (currentGesture === none)
    currentGesture = {
      type: DRAG,
      moveAction: action
    };
};

export const move = (event) => {
  currentGesture.moveAction && currentGesture.moveAction(event);
};

export const stop = (stopEvent) => {
  currentGesture.endAction && currentGesture.endAction(stopEvent);
  currentGesture = none;
};
