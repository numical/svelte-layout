export const SwipeLeft = Symbol('swipe left');
export const SwipeRight = Symbol('swipe right');
export const InvalidSwipe = Symbol('invalid swipe');

const timeAllowed = 500;

export const identifySwipe = (start, end) => {
    if (end.timeStamp - start.timeStamp > timeAllowed) {
        return InvalidSwipe;
    }

    const yDiff = (end.screenY || end.changedTouches[0].screenY) - (start.screenY || start.touches[0].screenY);
    if (Math.abs(yDiff) > window.innerHeight/8) {
        return InvalidSwipe;
    }

    const xDiff = (end.screenX || end.changedTouches[0].screenX) - (start.screenX || start.touches[0].screenX);
    if (Math.abs(xDiff) < window.innerWidth/6) {
        return InvalidSwipe;
    } else if (xDiff > 0) {
        return SwipeRight;
    } else {
        return SwipeLeft;
    }
};