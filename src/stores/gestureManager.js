import { writable } from 'svelte/store';
import { identifySwipe } from "../common/swipes";

const none = () => undefined;

export const gesture = writable({
    dragBehaviour: none,
    possibleSwipe: false,
    setDragBehaviour: callback => {
        gesture.update(state => ({
            ...state,
            dragBehaviour: callback,
            possibleSwipe: false
        }));
    },
    startSwipe: (event, callback) => {
        gesture.update(state => ({
            ...state,
            possibleSwipe: state.dragBehaviour !== none ? false : { start: event, callback }
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
                dragBehaviour: none,
                possibleSwipe: false
            }
        });
    }
});
