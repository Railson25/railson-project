import { cn } from "../../../../UI/lib/utils";

interface ConversationListItemProps {
  faker: any;
  active?: boolean;
}

function ConversationListItem({ faker, active }: ConversationListItemProps) {
  return (
    <div
      className={cn(
        "cursor-pointer flex items-start border-b border-t border-slate-200/60 dark:border-darkmode-400 hover:bg-slate-50 dark:hover:bg-darkmode-400/50 py-5 px-5 -mb-px last:border-b-0",
        active &&
          "z-10 relative bg-slate-100/80 dark:bg-darkmode-400 hover:bg-slate-100/80 dark:hover:bg-darkmode-400"
      )}
    >
      <div className="flex-none w-12 h-12 mr-1 image-fit">
        <img
          alt="Rocketman - HTML Admin Template"
          className="rounded-full"
          src={faker.photos[0]}
        />
        {faker.trueFalse[0] && (
          <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600" />
        )}
      </div>
      <div className="flex-1 ml-2 overflow-hidden">
        <div className="flex items-center">
          <a href="#" className="font-medium">
            {faker.users[0].name}
          </a>
          <div className="ml-auto text-xs text-slate-500">
            {faker.times[0]}
          </div>
        </div>
        <div className="w-full truncate text-xs text-slate-500 mt-0.5">
          {faker.users[0].username}
        </div>
        <div className="flex mt-2">
          <div className="flex-1 mr-3 truncate">
            {faker.news[0].shortContent}
          </div>
          {faker.trueFalse[0] && (
            <div className="flex items-center justify-center w-5 h-5 -mt-1 text-xs font-medium text-white rounded-full bg-primary">
              {faker.notificationCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConversationListItem;
