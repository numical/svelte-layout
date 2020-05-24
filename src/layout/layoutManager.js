import { writable } from 'svelte/store';
import { right } from './panelPositions';
import { SwipeLeft, SwipeRight } from '../gestures/swipes';
import { chatBot } from './panelContents';
import { fromEventToDomCoords } from '../common/coords';

const calcInitialWidth = () => {
  let percent = 20000 / window.innerWidth;
  return percent > 20 ? Math.floor(percent) : 20;
};
const panelWidth = calcInitialWidth();

const getX = event => event.clientX || event.touches[0].clientX;

export const layout = writable({
  panelPosition: right,
  graphWidth: 100,
  panelWidth,
  restorePanelWidth: panelWidth,
  restorePanelPosition: right,
  overlayPanel: true,
  panelContent: chatBot,
  transition: 0.6,
  resize: event => {
    layout.update(state => {
      const { x } = fromEventToDomCoords(event);
      const w = Math.floor((100 * x) / event.currentTarget.clientWidth);
      return state.panelPosition.resize(state, w);
    });
  },
  swipe: swipe => {
    layout.update(state => {
      switch (swipe) {
        case SwipeLeft:
          return state.panelPosition.swipeLeft(state);
        case SwipeRight:
          return state.panelPosition.swipeRight(state);
        default:
          return state;
      }
    });
  },
  setPanelContent: panelContent => {
    layout.update(state => ({
      ...state,
      panelContent,
    }));
  },
  toggleOverlay: () => {
    layout.update(state => state.panelPosition.toggleOverlay(state));
  },
});
