import { writable } from 'svelte/store';

export const gesture = writable({
    isDragging: false,
    startDrag: () => {
        gesture.update(state => ({
            ...state,
            isDragging: true
        }));
    },
    stopDrag: () => {
        gesture.update(state => ({
            ...state,
            isDragging: false
        }));
    }
});
