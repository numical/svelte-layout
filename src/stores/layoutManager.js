import { writable } from 'svelte/store';
import { right } from '../components/panel/panelPositions';
import { SwipeLeft, SwipeRight } from '../gestures/swipes';
import { chat, info } from '../components/panel/panelContents';
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
  panelContent: chat,
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
  togglePanelContent: () => {
    layout.update(state => ({
      ...state,
      panelContent: state.panelContent === chat ? info : chat,
    }));
  },
  toggleOverlay: () => {
    layout.update(state => state.panelPosition.toggleOverlay(state));
  },
});
