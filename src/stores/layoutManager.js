import { writable } from 'svelte/store';
import { right } from "../components/panel/panelPositions";
import { SwipeLeft, SwipeRight } from "../common/swipes";
import { chat, info } from '../components/panel/panelContents';
import { fromEventToDomCoords, toSVGCoords } from "../common/coordsUtils";

const calcInitialWidth = () => {
    let percent = 20000 /  window.innerWidth
    return percent > 20 ? Math.floor(percent) : 20;
}
const panelWidth = calcInitialWidth();

const getX = event => event.clientX || event.touches[0].clientX;

export const layout = writable({
    dateLineX: 0,
    panelPosition: right,
    graphWidth: 100,
    panelWidth,
    restorePanelWidth: panelWidth,
    restorePanelPosition: right,
    overlayPanel: true,
    panelContent: chat,
    transition: 0.6,
    resize: event => {
        layout.update(state => {
            const { x } = fromEventToDomCoords(event);
            const w = Math.floor(100 * x / event.currentTarget.clientWidth);
            return state.panelPosition.resize(state, w);
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
    updateDateLine: event => {
        layout.update(state => ({
            ... state,
            dateLineX: event ? toSVGCoords(event).x : 0
        }));
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
