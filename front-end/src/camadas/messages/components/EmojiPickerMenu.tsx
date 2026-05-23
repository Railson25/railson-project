import Lucide from "@/base-components/Lucide";
import { FormInput } from "@/base-components/Form";
import { Menu, Tab } from "@/base-components/Headless";
import { cn } from "../../../../UI/lib/utils";
import { EMOJI_CATEGORIES } from "../constants";

function EmojiPickerMenu() {
  return (
    <Menu className="mr-3 sm:mr-5">
      <Menu.Button
        as="a"
        href="#"
        className="block w-4 h-4 sm:w-5 sm:h-5 text-slate-500"
      >
        <Lucide icon="Smile" className="w-full h-full" />
      </Menu.Button>
      <Menu.Items placement="top-end" className="w-[320px]">
        <Tab.Group className="flex flex-col h-[364px]" selectedIndex={1}>
          <div className="px-1 pt-1">
            <div className="relative text-slate-500">
              <FormInput
                type="text"
                className="pr-10 border-transparent bg-slate-100"
                placeholder="Search emojis..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
              />
            </div>
          </div>
          <Tab.List variant="pills" className="px-1 mt-5">
            {EMOJI_CATEGORIES.map((category) => (
              <Tab key={category.label}>
                {({ selected }) => (
                  <Tab.Button
                    className={cn(
                      "w-full px-0 py-2 border-0 hover:bg-slate-100 dark:hover:bg-darkmode-400",
                      selected &&
                        "bg-slate-200 hover:bg-slate-200 border-b-0 text-slate-600 dark:bg-darkmode-300 dark:text-slate-300"
                    )}
                    as="button"
                  >
                    <Lucide icon={category.icon} className="w-4 h-4 mx-auto" />
                  </Tab.Button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="flex-1 px-1 mt-4 overflow-y-auto scrollbar-hidden">
            {EMOJI_CATEGORIES.map((category) => (
              <Tab.Panel key={category.label}>
                <div className="grid grid-cols-8 gap-2 text-lg">
                  {Array.from({ length: 6 }).flatMap(() => category.emojis).map(
                    (emoji, index) => (
                      <button
                        key={`${emoji}-${index}`}
                        className="rounded focus:outline-none hover:bg-slate-100 dark:hover:bg-darkmode-400"
                      >
                        {emoji}
                      </button>
                    )
                  )}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Menu.Items>
    </Menu>
  );
}

export default EmojiPickerMenu;
