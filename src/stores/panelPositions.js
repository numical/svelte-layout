const minAutoPanelWidth = 20;

const drag = (state, w) => ({
    ...state,
    panelPosition: state.restorePanelPosition.calcPanelPosition(w),
    graphWidth: state.overlayPanel ? 100 : state.restorePanelPosition.calcGraphWidth(w),
    panelWidth: state.restorePanelPosition.calcPanelWidth(w),
    restorePanelWidth: state.restorePanelPosition.calcRestorePanelWidth(w, state.restorePanelWidth),
    transition: 0
});

const toggleOverlay = state => ({
    ...state,
    overlayPanel: !state.overlayPanel,
    graphWidth: state.overlayPanel ? 100 - state.panelWidth : 100,
    transition: 0.6
});

export const left = {
    drag,
    graphPos: 'right',
    calcGraphWidth: w => 100 - w,
    calcPanelPosition: w => w === 100
        ? maximised
        : w === 0
        ? minimised
        : left,
    calcPanelWidth: w => w,
    calcRestorePanelWidth: (w, restorePanelWidth) => w === 0
        ? restorePanelWidth
        : w < minAutoPanelWidth
        ? minAutoPanelWidth
        : w,
    panelPos: 'left',
    swipeRight: state => ({
        ...state,
        panelPosition: maximised,
        graphWidth: state.overlayPanel ? 100 : 0,
        panelWidth: 100,
        transition: 0.6
    }),
    swipeLeft: state => ({
        ...state,
        panelPosition: minimised,
        graphWidth: 100,
        panelWidth: 0,
        transition: 0.6
    }),
    toggleOverlay
};

export const right = {
    drag,
    graphPos: 'left',
    calcGraphWidth: w => w,
    calcPanelPosition: w => w === 100
        ? minimised
        : w === 0
        ? maximised
        : right,
    calcPanelWidth: w => 100 - w,
    calcRestorePanelWidth: (w, restorePanelWidth) => w === 100
        ? restorePanelWidth
        : (100 - w) < minAutoPanelWidth
        ? minAutoPanelWidth
        : (100 - w),
    panelPos: 'right',
    swipeLeft: state => ({
        ...state,
        panelPosition: maximised,
        graphWidth: state.overlayPanel ? 100 : 0,
        panelWidth: 100,
        transition: 0.6
    }),
    swipeRight: state => ({
        ...state,
        panelPosition: minimised,
        graphWidth: 100,
        panelWidth: 0,
        transition: 0.6
    }),
    toggleOverlay
};

export const maximised = {
    drag,
    swipeLeft: state => ({
        ...state,
        panelPosition: left,
        restorePanelPosition: left,
        graphWidth: state.overlayPanel ? 100 : 100 - state.restorePanelWidth,
        panelWidth: state.restorePanelWidth,
        transition: 0.6
    }),
    swipeRight: state => ({
        ...state,
        panelPosition: right,
        restorePanelPosition: right,
        graphWidth: state.overlayPanel ? 100 : 100 - state.restorePanelWidth,
        panelWidth: state.restorePanelWidth,
        transition: 0.6
    }),
    toggleOverlay
};

export const minimised = {
    drag,
    swipeLeft: state => state.restorePanelPosition === right
        ? {
            ...state,
            panelPosition: right,
            panelWidth: state.restorePanelWidth,
            graphWidth: state.overlayPanel ? 100 : 100 - state.restorePanelWidth,
            transition: 0.6
        }
        : state,
    swipeRight: state => state.restorePanelPosition === left
        ? {
            ...state,
            panelPosition: left,
            panelWidth: state.restorePanelWidth,
            graphWidth: state.overlayPanel ? 100 : 100 - state.restorePanelWidth,
            transition: 0.6
        }
        : state,
    toggleOverlay: state => state
};