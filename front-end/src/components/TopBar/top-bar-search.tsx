import { FormInput } from "../../base-components/Form";
import Lucide from "../../base-components/Lucide";

type Props = {
  onOpen: () => void;
};

export function TopBarSearch({ onOpen }: Props) {
  return (
    <div className="relative ml-auto intro-x sm:mx-auto">
      <div className="relative hidden mt-1 sm:block">
        <FormInput
          onClick={onOpen}
          type="text"
          placeholder="Quick Search... (Ctrl+k)"
          className="w-80 shadow-none rounded-full text-slate-200 border-transparent bg-white/[0.11] pl-3.5 pr-8 placeholder:text-slate-400 focus:border-transparent dark:bg-darkmode-400/70"
        />
        <Lucide
          icon="Search"
          className="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-400"
        />
      </div>

      <a className="relative text-white/70 sm:hidden" href="#">
        <Lucide icon="Search" className="w-5 h-5 mr-5 dark:text-slate-500" />
      </a>
    </div>
  );
}
