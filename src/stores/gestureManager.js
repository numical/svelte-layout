import { writable } from 'svelte/store';
import { identifySwipe } from "../common/swipes";

export const gesture = writable({
    isDragging: false,
    possibleSwipe: false,
    startDrag: () => {
        gesture.update(state => ({
            ...state,
            isDragging: true,
            possibleSwipe: false
        }));
    },
    startSwipe: (event, callback) => {
        gesture.update(state => ({
            ...state,
            possibleSwipe: state.isDragging ? false : { start: event, callback }
        }));
    },
    stop: event => {
        gesture.update(state => {
            if (state.possibleSwipe) {
                const { start, callback } = state.possibleSwipe;
                callback(identifySwipe(start, event));
            }
            return {
                ...state,
                isDragging: false,
                possibleSwipe: false
            }
        });
    }
});
