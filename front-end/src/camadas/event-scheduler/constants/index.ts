import type { EventFormField, SchedulerEvent } from "../types";

export const SCHEDULER_TABS = ["Event List", "Add New Event"];

export const SCHEDULER_EVENTS: SchedulerEvent[] = [
  {
    title: "VueJs Amsterdam",
    date: "02 February 2022",
    days: 2,
    time: "09.00 AM - 04.00 PM",
    location: "1396 Pooh Bear Lane, New Market",
    tone: "warning",
  },
  {
    title: "Vue Fes Japan 2022",
    date: "24 March 2022",
    days: 3,
    time: "09.00 AM - 04.00 PM",
    location: "1396 Pooh Bear Lane, New Market",
    tone: "primary",
  },
  {
    title: "Laracon 2022",
    date: "24 March 2022",
    days: 4,
    time: "09.00 AM - 04.00 PM",
    location: "1396 Pooh Bear Lane, New Market",
    tone: "success",
  },
  {
    title: "VueJs Japan",
    date: "10 December 2022",
    days: 2,
    time: "09.00 AM - 04.00 PM",
    location: "1396 Pooh Bear Lane, New Market",
    tone: "warning",
  },
];

export const EVENT_FORM_FIELDS: EventFormField[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Event title",
  },
  {
    id: "date",
    label: "Date",
    placeholder: "Event title",
    inputClassName: "datepicker",
  },
  {
    id: "time",
    label: "Time",
    placeholder: "Event title",
  },
  {
    id: "location",
    label: "Location",
    placeholder: "",
    type: "textarea",
  },
];
