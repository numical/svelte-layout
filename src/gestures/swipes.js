export const SwipeLeft = Symbol('swipe left');
export const SwipeRight = Symbol('swipe right');
export const InvalidSwipe = Symbol('invalid swipe');

export const identifySwipe = (start, end) => {
  if (end.timeStamp - start.timeStamp > 500) {
    console.log('Invalid swipe as timeout');
    return InvalidSwipe;
  }

  const yDiff =
    (end.screenY || end.changedTouches[0].screenY) -
    (start.screenY || start.touches[0].screenY);
  if (Math.abs(yDiff) > window.innerHeight / 6) {
    console.log('Invalid swipe as y delta > 1/6');
    return InvalidSwipe;
  }

  const xDiff =
    (end.screenX || end.changedTouches[0].screenX) -
    (start.screenX || start.touches[0].screenX);
  if (Math.abs(xDiff) < window.innerWidth / 6) {
    console.log('Invalid swipe as x delta < 1/6');
    return InvalidSwipe;
  } else if (xDiff > 0) {
    return SwipeRight;
  } else {
    return SwipeLeft;
  }
};
