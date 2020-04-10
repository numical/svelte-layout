const drag = (state, w) => {
    const chatWidth = state.chatRight ? 100 - w : w;
    const graphWidth = state.overlayChat ? 100 : state.chatRight ? w : 100 - w;
    const current = state.chatRight
        ? ( w === 100 ? minimised : w === 0 ? maximised : right)
        : ( w === 100 ? maximised : w === 0 ? minimised : left);
    const previousChatWidth = state.chatRight
        ? ( w === 100 ? state.previousChatWidth : chatWidth < state.minAutoChatWidth ? state.minAutoChatWidth : chatWidth)
        : ( w === 0 ? state.previousChatWidth : chatWidth < state.minAutoChatWidth ? state.minAutoChatWidth : chatWidth)
    return {
        ...state,
        current,
        graphWidth,
        chatWidth,
        previousChatWidth,
        transition: 0
    }
};

const toggleOverlay = state => ({
    ...state,
    overlayChat: !state.overlayChat,
    graphWidth: state.overlayChat ? 100 - state.chatWidth : 100,
    transition: 0.6
});

export const left = {
    drag,
    swipeRight: state => ({
        ...state,
        current: maximised,
        graphWidth: state.overlayChat ? 100 : 0,
        chatWidth: 100,
        transition: 0.6
    }),
    swipeLeft: state => ({
        ...state,
        current: minimised,
        graphWidth: state.overlayChat ? 100 : state.graphWidth,
        chatWidth: 0,
        transition: 0.6
    }),
    toggleOverlay
};

export const right = {
    drag,
    swipeLeft: state => ({
        ...state,
        current: maximised,
        graphWidth: state.overlayChat ? 100 : 0,
        chatWidth: 100,
        transition: 0.6
    }),
    swipeRight: state => ({
        ...state,
        current: minimised,
        graphWidth: state.overlayChat ? 100 : state.graphWidth,
        chatWidth: 0,
        transition: 0.6
    }),
    toggleOverlay
};

export const maximised = {
    drag,
    swipeLeft: state => ({
        ...state,
        current: left,
        chatRight: false,
        graphWidth: state.overlayChat ? 100 : 100 - state.previousChatWidth,
        chatWidth: state.previousChatWidth,
        transition: 0.6
    }),
    swipeRight: state => ({
        ...state,
        current: right,
        chatRight: true,
        graphWidth: state.overlayChat ? 100 : 100 - state.previousChatWidth,
        chatWidth: state.previousChatWidth,
        transition: 0.6
    }),
    toggleOverlay
};

export const minimised = {
    drag,
    swipeLeft: state => state.chatRight
        ? {
            ...state,
            current: right,
            chatWidth: state.previousChatWidth,
            graphWidth: state.overlayChat ? 100 : 100 - state.previousChatWidth,
            transition: 0.6
        }
        : state,
    swipeRight: state => state.chatRight
        ? state
        : {
            ...state,
            current: left,
            chatWidth: state.previousChatWidth,
            graphWidth: state.overlayChat ? 100 : 100 - state.previousChatWidth,
            transition: 0.6
        },
    toggleOverlay: state => state
};