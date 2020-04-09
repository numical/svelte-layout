export const chatRight = {
    drag: (state, w) => ({
       ...state,
       current: w === 100 ? minimisedRight : chatRight,
       graphWidth: w,
       chatWidth: 100 - w,
       transition: 0
    }),
    swipeLeft: state => ({
        ...state,
        graphWidth: 0,
        chatWidth: 100,
        transition: 0.6
    }),
    swipeRight: state => state.chatWidth === 100
        ? {
            ...state,
            current: chatRight,
            graphWidth: 100 - state.previousChatWidth,
            chatWidth: state.previousChatWidth,
            transition: 0.6
        }
        : {
            ...state,
            current: minimisedRight,
            graphWidth: 100,
            chatWidth: 0,
            transition: 0.6
        },
    toggleOverlay: state => ({
        ...state,
        current: overlayRight,
        overlayChat: true,
        graphWidth: 100,
        transition: 0.6
    })
};

export const overlayRight = {
    drag: (state, w) => ({
        ...state,
        current: w === 100 ? minimisedRight : overlayRight,
        chatWidth: 100 - w,
        previousChatWidth: 100-w,
        transition: 0
    }),
    swipeLeft: state => ({
        ...state,
        chatWidth: 100,
        transition: 0.6
    }),
    swipeRight: state => state.chatWidth === 100
        ? {
            ...state,
            current: chatRight,
            chatWidth: state.previousChatWidth,
            transition: 0.6
        }
        : {
            ...state,
            current: minimisedRight,
            chatWidth: 0,
            transition: 0.6
        },
    toggleOverlay: state => ({
        ...state,
        current: chatRight,
        overlayChat: false,
        graphWidth: 100 - state.chatWidth,
        transition: 0.6
    })
};

export const minimisedRight = {
    drag: state => state,
    swipeLeft: state => ({
        ...state,
        current: state.overlayChat ? overlayRight : chatRight,
        chatWidth: state.previousChatWidth,
        graphWidth: state.overlayChat ? 100 : 100 - state.previousChatWidth,
        transition: 0.6
    }),
    swipeRight: state => state,
    toggleOverlay: state => state
};

