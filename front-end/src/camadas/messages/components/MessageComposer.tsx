import Lucide from "@/base-components/Lucide";
import { FormInput, FormTextarea } from "@/base-components/Form";
import EmojiPickerMenu from "./EmojiPickerMenu";

function MessageComposer() {
  return (
    <div className="flex items-center pt-4 pb-10 border-t sm:py-4 border-slate-200/60 dark:border-darkmode-400">
      <FormTextarea
        className="px-5 py-3 border-transparent shadow-none resize-none h-[46px] dark:bg-darkmode-600 focus:border-transparent focus:ring-0"
        rows={1}
        placeholder="Type your message..."
      />
      <div className="absolute bottom-0 left-0 flex mb-5 ml-5 sm:static sm:ml-0 sm:mb-0">
        <EmojiPickerMenu />
        <div className="relative w-4 h-4 mr-3 sm:w-5 sm:h-5 text-slate-500 sm:mr-5">
          <Lucide icon="Paperclip" className="w-full h-full" />
          <FormInput
            type="file"
            className="absolute top-0 left-0 w-full h-full opacity-0"
          />
        </div>
      </div>
      <a
        href="#"
        className="flex items-center justify-center flex-none w-8 h-8 mr-5 text-white rounded-full sm:w-10 sm:h-10 bg-primary"
      >
        <Lucide icon="Send" className="w-4 h-4" />
      </a>
    </div>
  );
}

export default MessageComposer;
