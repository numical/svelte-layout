import { writable } from "svelte/store";
import { identifySwipe } from "./swipes";

const DRAG = Symbol("drag");
const SWIPE = Symbol("swipe");
const PINCH = Symbol("pinch");
const NONE = Symbol("none");

const none = {
  type: NONE,
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
  if (currentGesture === none) {
    currentGesture = {
      type: SWIPE,
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
  }
  currentGesture = none;
};
