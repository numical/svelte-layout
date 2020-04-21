import { writable } from "svelte/store";
import { fromEventToSVGCoords } from "../common/coords";

export const graph = writable({
  updateDateLine: (event) => {
    graph.update((state) => ({
      ...state,
      dateLineX: event ? fromEventToSVGCoords(event).x : 0,
    }));
  }
});
