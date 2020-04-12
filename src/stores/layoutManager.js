import { writable } from 'svelte/store';
import { right } from "./panelPositions";
import { SwipeLeft, SwipeRight } from "./swipes";
import { chat, info } from './panelContents';

export const layout = writable({
    panelPosition: right,
    graphWidth: 100,
    panelWidth: 20,
    restorePanelWidth: 20,
    restorePanelPosition: right,
    overlayPanel: true,
    panelContent: chat,
    transition: 0.6,
    drag: event => {
        layout.update(state => {
            const x = event.clientX || event.touches[0].clientX;
            const w = Math.floor(100 * x / event.currentTarget.clientWidth);
            return state.panelPosition.drag(state, w);
        });
    },
    swipe: swipe => {
        layout.update( state => {
            switch (swipe) {
                case SwipeLeft:
                    return state.panelPosition.swipeLeft(state);
                case SwipeRight:
                    return state.panelPosition.swipeRight(state);
                default:
                    return state;
            }
        })
    },
    togglePanelContent: () => {
        layout.update(state => ({
            ... state,
            panelContent : state.panelContent === chat ? info : chat
        }));
    },
    toggleOverlay: () => {
        layout.update(state => state.panelPosition.toggleOverlay(state));
    }
});
