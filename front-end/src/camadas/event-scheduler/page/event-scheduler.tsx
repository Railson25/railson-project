import "@fullcalendar/react/dist/vdom";
import FullCalendarView from "@/components/Calendar";
import EventSchedulerHeader from "../components/EventSchedulerHeader";
import EventSidebar from "../components/EventSidebar";

function Main() {
  return (
    <>
      <EventSchedulerHeader />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <EventSidebar />
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="p-5 box">
            <FullCalendarView />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
