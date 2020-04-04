let dragging = false;

export const startDrag = () => dragging = true;

export const stopDrag = () => dragging = false;

export const isDragging = () => dragging;