import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";

function EventSchedulerHeader() {
  return (
    <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
      <h2 className="mr-auto text-lg font-medium">Event Scheduler</h2>
      <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
        <Button variant="primary" className="mr-2 shadow-md">
          <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Event Reports
        </Button>
        <Button className="!box">
          <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
        </Button>
      </div>
    </div>
  );
}

export default EventSchedulerHeader;
