import { Dialog } from "@/base-components/Headless";
import Lucide from "@/base-components/Lucide";
import { FormInput } from "@/base-components/Form";
import fakerData from "@/utils/faker";
import _ from "lodash";

type Props = { open: boolean; onClose: () => void };

export function TopBarSearchModal({ open, onClose }: Props) {
  return (
    <Dialog
      size="lg"
      open={open}
      onClose={onClose}
      className="flex items-center justify-center"
    >
      <Dialog.Panel className="p-0">
        <div className="relative border-b border-slate-200/60">
          <Lucide
            icon="Search"
            className="absolute inset-y-0 w-5 h-5 my-auto ml-4 text-slate-500"
          />

          <FormInput
            type="text"
            className="px-12 py-5 border-0 shadow-none focus:ring-0"
            placeholder="Quick Search..."
          />

          <div className="absolute inset-y-0 right-0 flex items-center h-6 px-2 my-auto mr-4 text-xs rounded bg-slate-200 text-slate-500">
            ESC
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3 font-medium">Applications</div>
          <div className="mb-5">
            <a className="flex items-center mt-3">
              <div className="flex items-center justify-center rounded-full w-7 h-7 bg-success/20 text-success">
                <Lucide icon="Inbox" className="w-3.5 h-3.5" />
              </div>
              <div className="ml-3 truncate">Compose New Mail</div>
              <div className="flex items-center ml-auto text-xs text-slate-500">
                <Lucide icon="Link" className="w-3.5 h-3.5 mr-2" /> Quick Access
              </div>
            </a>
          </div>

          <div className="mb-3 font-medium">Contacts</div>
          {_.take(fakerData, 4).map((faker, i) => (
            <a key={i} className="flex items-center mt-3">
              <div className="w-7 h-7 image-fit">
                <img className="rounded-full" src={faker.photos[0]} alt="" />
              </div>
              <div className="ml-3 truncate w-36">{faker.users[0].name}</div>
              <div className="ml-auto text-xs text-right truncate w-36 text-slate-500">
                {faker.users[0].email}
              </div>
            </a>
          ))}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
