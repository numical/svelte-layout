import { writable } from 'svelte/store';
import { isDragging } from "./dragManager";

const defaultLayout = {
    graphWidth: 100,
    chatWidth: 20,
    overlayChat: true,
    showChat: true,
    transition: 0.6
};

export const layout = writable(defaultLayout);

export const updateLayout = event => {
    if (isDragging()) {
        layout.update(layout => {
            const x = event.clientX || event.touches[0].clientX;
            const w = Math.floor(100 * x / event.currentTarget.clientWidth);
            return {
                ...layout,
                graphWidth: layout.overlayChat ? 100 : w,
                chatWidth: 100 - w,
                transition: 0
            };
        });
    }
};

export const toggleOverlay = () => {
    layout.update(layout => layout.overlayChat
        ? {
            ...layout,
            overlayChat: false,
            graphWidth : 100 - layout.chatWidth,
            transition: 0.6
        }
        : {
            ...layout,
            overlayChat: true,
            graphWidth : 100,
            transition: 0.6
        }
    );
}