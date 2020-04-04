import { writable } from 'svelte/store';

const defaultLayout = {
    graphWidth: 100,
    chatWidth: 20,
    overlayChat: true,
    showChat: true,
    transition: 0.6
};

let resizing = false;

export const layout = writable(defaultLayout);

export const startResize = () => resizing = true;

export const stopResize = () => resizing = false;

export const resize = (container, event) => {
    if (resizing) {
        layout.update(layout => {
            console.log(`resize event `);
            const x = event.clientX || event.touches[0].clientX;
            const w = Math.floor(100 * x / container.clientWidth);
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