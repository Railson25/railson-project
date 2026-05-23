export type EventTone = "warning" | "primary" | "success";

export interface SchedulerEvent {
  title: string;
  date: string;
  days: number;
  time: string;
  location: string;
  tone: EventTone;
}

export interface EventFormField {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "textarea";
  className?: string;
  inputClassName?: string;
}
