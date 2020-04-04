import { writable } from 'svelte/store';
import { SwipeLeft, SwipeRight, InvalidSwipe } from "./Swipe";

export const layout = writable({
    graphWidth: 100,
    chatWidth: 20,
    previousChatWidth: 20,
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
    maximisePanel: swipe => {
        if (InvalidSwipe !== swipe) {
            layout.update( state => {
                const graphWidth = state.overlayChat
                    ? 100
                    : SwipeRight === swipe
                    ? 100
                    : state.graphWidth === 100
                    ? 100 - state.previousChatWidth
                    : 0;
                const chatWidth = SwipeLeft === swipe
                    ? (state.chatWidth === 0 ? state.previousChatWidth : 100)
                    : (state.chatWidth === 100 ? state.previousChatWidth: 0);
                const previousChatWidth = chatWidth > 0 && chatWidth < 100 ? chatWidth : state.previousChatWidth;
                return {
                    ...state,
                    graphWidth,
                    chatWidth,
                    previousChatWidth,
                    transition: 0.6
                };
            });
        }
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
