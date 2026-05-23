import type { Draggable } from "@fullcalendar/interaction";

export function createDraggableOptions(): Draggable["settings"] {
  return {
    itemSelector: ".event",
    eventData(eventEl) {
      const title = eventEl.querySelectorAll(".event__title")[0]?.innerHTML;
      const days =
        eventEl.querySelectorAll(".event__days")[0]?.textContent ?? "0";

      return {
        title,
        duration: {
          days: parseInt(days),
        },
      };
    },
  };
}
