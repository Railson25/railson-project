import { Tab } from "@/base-components/Headless";
import { SCHEDULER_TABS } from "../constants";
import EventFormPanel from "./EventFormPanel";
import EventListPanel from "./EventListPanel";

function EventSidebar() {
  return (
    <Tab.Group className="col-span-12 xl:col-span-4 2xl:col-span-3">
      <div className="p-2 box intro-y">
        <Tab.List variant="pills">
          {SCHEDULER_TABS.map((tab) => (
            <Tab key={tab}>
              <Tab.Button className="w-full py-2" as="button">
                {tab}
              </Tab.Button>
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="mt-5 intro-y">
        <Tab.Panel>
          <EventListPanel />
        </Tab.Panel>
        <Tab.Panel>
          <EventFormPanel />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default EventSidebar;
