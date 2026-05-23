import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";
import { cn } from "../../../../UI/lib/utils";
import type { EventTone, SchedulerEvent } from "../types";

const EVENT_TONE_CLASS: Record<EventTone, string> = {
  warning: "bg-warning",
  primary: "bg-primary",
  success: "bg-success",
};

interface EventCardProps {
  event: SchedulerEvent;
}

function EventCard({ event }: EventCardProps) {
  return (
    <div className="p-5 mt-5 cursor-pointer event box first:mt-0">
      <div className="flex items-center">
        <div
          className={cn("w-2 h-2 mr-3 rounded-full", EVENT_TONE_CLASS[event.tone])}
        />
        <div className="font-medium truncate event__title">{event.title}</div>
        <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
      </div>
      <div className="py-5 my-5 border-t border-b border-slate-200/60 dark:border-darkmode-400">
        <div className="flex items-center">
          <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
          {event.date}
        </div>
        <div className="flex items-center mt-3">
          <Lucide icon="Calendar" className="w-4 h-4 mr-2 text-slate-500" />
          <span className="mr-1 event__days">{event.days}</span> Days
          <span className="mx-1">&bull;</span> {event.time}
        </div>
        <div className="flex items-center mt-3">
          <Lucide icon="Map" className="w-4 h-4 mr-2 text-slate-500" />
          {event.location}
        </div>
      </div>
      <div className="flex">
        <Button variant="outline-secondary" className="px-2 py-1">
          <Lucide icon="Calendar" className="w-4 h-4 mr-2" /> Reschedule
        </Button>
        <Button variant="outline-secondary" className="px-2 py-1 ml-auto">
          <Lucide icon="UserX" className="w-4 h-4 mr-2" /> Cancel
        </Button>
      </div>
    </div>
  );
}

export default EventCard;
