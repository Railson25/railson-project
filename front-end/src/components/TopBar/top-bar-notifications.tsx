import { Popover } from "../../base-components/Headless";
import Lucide from "../../base-components/Lucide";
import fakerData from "../../utils/faker";
import clsx from "clsx";
import _ from "lodash";

export function TopBarNotifications() {
  return (
    <Popover className="mr-5 intro-x sm:mr-6">
      <Popover.Button
        className={clsx([
          "relative text-white/70 outline-none block",
          "before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:-top-1 before:right-0 before:bg-white before:opacity-50 before:animate-ping",
          "after:content-[''] after:w-[8px] after:h-[8px] after:rounded-full after:absolute after:-top-1 after:right-0 after:bg-danger",
        ])}
      >
        <Lucide icon="Bell" className="w-5 h-5 dark:text-slate-500" />
      </Popover.Button>

      <Popover.Panel className="w-[280px] sm:w-[350px] p-5 mt-2">
        <div className="mb-5 text-base font-medium">Notifications</div>

        {_.take(fakerData, 3).map((faker, i) => (
          <div key={i} className="relative flex mt-5 cursor-pointer first:mt-0">
            <div className="w-10 h-10 mr-2 image-fit">
              <img src={faker.photos[0]} className="rounded-full" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success"></div>
            </div>

            <div>
              <div className="font-medium">{faker.users[0].name}</div>
              <div className="text-slate-500">{faker.news[0].shortContent}</div>
              <div className="mt-1 text-xs text-slate-400">
                {faker.times[0]}
              </div>
            </div>
          </div>
        ))}
      </Popover.Panel>
    </Popover>
  );
}
