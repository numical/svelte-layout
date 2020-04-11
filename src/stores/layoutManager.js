import { writable } from 'svelte/store';
import { right } from "./panelPositions";
import { SwipeLeft, SwipeRight } from "./swipes";

export const layout = writable({
    panelPosition: right,
    graphWidth: 100,
    panelWidth: 20,
    restorePanelWidth: 20,
    restorePanelPosition: right,
    overlayPanel: true,
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
    toggleOverlay: () => {
        layout.update(state => state.panelPosition.toggleOverlay(state));
    }
});
