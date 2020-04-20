import { writable } from "svelte/store";
import { identifySwipe } from "../common/swipes";

const DRAG = Symbol('drag');
const SWIPE = Symbol('swipe');
const PINCH = Symbol('pinch');
const NONE = Symbol('none');

const none = {
  type: NONE
};

export const gesture = writable({
  currentGesture: none,
  setDragBehaviour: (callback) => {
    gesture.update((state) => ({
      ...state,
      currentGesture: state.currentGesture || {
        type: DRAG,
        callback
      }
    }));
  },
  startSwipe: (event, callback) => {
    gesture.update((state) => ({
      ...state,
      currentGesture: state.currentGesture || {
        type: SWIPE,
        start: event,
        callback
      }
    }));
  },
  stop: (event) => {
    gesture.update((state) => {
      if (state.currentGesture) {
        const { callback, start, type } = state.currentGesture;
        switch(state.currentGesture.type) {
          case SWIPE:
            callback(identifySwipe(start, event));
        }
      }
      return {
        ...state,
        currentGesture: none
      };
    });
  },
});
