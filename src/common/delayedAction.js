const waiting = Symbol('waiting');
const cancelled = Symbol('cancelled');
const completed = Symbol('completed');

export const delayedAction = (delay, doAction, undoAction) => {
  let state = waiting;
  let undoArgs = undefined;
  setTimeout(() => {
    if (state === waiting) {
      undoArgs = doAction();
      state = completed;
    }
  }, delay);
  return () => {
    switch (state) {
      case waiting:
        state = cancelled;
        break;
      case completed:
        if (undoAction) {
          undoAction(undoArgs);
        }
        break;
    }
  };
};
