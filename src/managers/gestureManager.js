import { writable } from 'svelte/store';

export const gesture = writable({
    isDragging: false,
    startDrag: () => {
        gesture.update(gesture => ({
            ...gesture,
            isDragging: true
        }));
    },
    stopDrag: () => {
        gesture.update(gesture => ({
            ...gesture,
            isDragging: false
        }));
    }
});
