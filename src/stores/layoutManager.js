import { writable } from 'svelte/store';

export const layout = writable({
    graphWidth: 100,
    chatWidth: 20,
    overlayChat: true,
    showChat: true,
    transition: 0.6,
    updateLayout: event => {
        layout.update(state => {
            const x = event.clientX || event.touches[0].clientX;
            const w = Math.floor(100 * x / event.currentTarget.clientWidth);
            return {
                ...state,
                graphWidth: state.overlayChat ? 100 : w,
                chatWidth: 100 - w,
                transition: 0
            };
        });
    },
    toggleOverlay: () => {
        layout.update(state => state.overlayChat
            ? {
                ...state,
                overlayChat: false,
                graphWidth: 100 - state.chatWidth,
                transition: 0.6
            }
            : {
                ...state,
                overlayChat: true,
                graphWidth: 100,
                transition: 0.6
            }
        );
    }
});
