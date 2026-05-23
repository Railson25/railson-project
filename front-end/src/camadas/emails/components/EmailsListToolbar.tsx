import Button from "@/base-components/Button";
import { FormInput } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";

function EmailsListToolbar() {
  return (
    <div className="flex flex-wrap items-center px-5 pt-5 pb-5 mb-4 border-b gap-y-3 border-slate-200/60 dark:border-darkmode-400">
      <Button variant="outline-secondary" className="mr-2">
        <Lucide icon="Users" className="w-4 h-4 mr-2" /> Create Group
      </Button>
      <Button variant="outline-secondary" className="mr-auto">
        <Lucide icon="Video" className="w-4 h-4 mr-2" /> Start a Video Call
      </Button>
      <div className="w-[350px] relative">
        <FormInput
          type="text"
          className="pl-10"
          placeholder="Search for messages or users..."
        />
        <Lucide
          icon="Search"
          className="absolute inset-y-0 left-0 w-5 h-5 my-auto ml-3 text-slate-400"
        />
      </div>
    </div>
  );
}

export default EmailsListToolbar;
