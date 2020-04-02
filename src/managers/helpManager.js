import { writable } from 'svelte/store';

export const currentFocus = writable('default');

export const setFocus = focus => {
    currentFocus.update(() => focus);
};

export const loseFocus = () => {
    currentFocus.update(() => 'default');
};