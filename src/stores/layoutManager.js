import { writable } from 'svelte/store';
import { overlayRight } from "./layouts";
import { SwipeLeft, SwipeRight } from "./swipes";

export const layout = writable({
    current: overlayRight,
    graphWidth: 100,
    chatWidth: 20,
    chatRight: true,
    previousChatWidth: 20,
    overlayChat: true,
    transition: 0.6,
    drag: event => {
        layout.update(state => {
            const x = event.clientX || event.touches[0].clientX;
            const w = Math.floor(100 * x / event.currentTarget.clientWidth);
            return state.current.drag(state, w);
        });
    },
    swipe: swipe => {
        layout.update( state => {
            switch (swipe) {
                case SwipeLeft:
                    return state.current.swipeLeft(state);
                case SwipeRight:
                    return state.current.swipeRight(state);
                default:
                    return state;
            }
        })
    },
    toggleOverlay: () => {
        layout.update(state => state.current.toggleOverlay(state));
    }
});
