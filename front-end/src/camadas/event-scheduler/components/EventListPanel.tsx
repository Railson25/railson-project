import { Draggable as FullCalendarDraggable } from "@/base-components/Calendar";
import { SCHEDULER_EVENTS } from "../constants";
import { createDraggableOptions } from "../utils";
import EventCard from "./EventCard";

function EventListPanel() {
  return (
    <FullCalendarDraggable
      id="calendar-events"
      options={createDraggableOptions()}
      className="h-[820px] overflow-y-auto scrollbar-hidden"
    >
      {SCHEDULER_EVENTS.map((event) => (
        <EventCard key={event.title} event={event} />
      ))}
    </FullCalendarDraggable>
  );
}

export default EventListPanel;
