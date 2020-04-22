import {InvalidSwipe, SwipeLeft, SwipeRight} from "./swipes";

const DRAG = Symbol("drag");
const SWIPE = Symbol("swipe");
const PINCH = Symbol("pinch");
const NONE = Symbol("none");

const none = {
  type: NONE,
};

const isSwipe = event => true;

const isPinch = event => {
  const is = event.touches && event.touches.length === 2;
  console.log(is ? "IS a pinch" : "NOT a pinch");
  return is;
}

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

export const startDrag = (action) => {
  if (currentGesture === none)
    currentGesture = {
      type: DRAG,
      action,
    };
};

export const drag = (event) => {
  if (currentGesture.type === DRAG) {
    currentGesture.action(event);
  }
};

export const startSwipe = (action, startEvent) => {
  if (currentGesture === none && isSwipe(startEvent)) {
    currentGesture = {
      type: SWIPE,
      startEvent,
      action,
    };
  }
};

export const startPinch = (action, startEvent) => {
  if (currentGesture === none && isPinch(startEvent)) {
    currentGesture = {
      type: PINCH,
      startEvent,
      action,
    };
  }
};

export const stop = (stopEvent) => {
  const { action, startEvent, type } = currentGesture;
  switch (type) {
    case SWIPE:
      action(identifySwipe(startEvent, stopEvent));
      break;
    case PINCH:
      action(stopEvent);
      break;
  }
  currentGesture = none;
};
