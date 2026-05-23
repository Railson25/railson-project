import Lucide from "@/base-components/Lucide";
import Button from "@/base-components/Button";
import DashboardActionMenu from "@/components/DashboardActionMenu";
import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import { cn } from "../../../../UI/lib/utils";
import { IMPORTANT_NOTES, NOTE_ACTIONS } from "../constants";

function ImportantNotesSection() {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
      <DashboardSectionHeader
        title="Important Notes"
        animation="intro-x"
        viewMoreHref=""
      />
      <div className="mt-4">
        <div className="p-5 intro-x box">
          <Button className="w-full">
            Add New Notes
            <Lucide icon="ArrowRight" className="w-4 h-4 ml-auto" />
          </Button>
          {IMPORTANT_NOTES.map((note, index) => (
            <div
              key={note.title}
              className={cn(
                index === 0
                  ? "mt-5"
                  : "pt-5 mt-5 border-t border-dashed border-slate-200"
              )}
            >
              <div className="font-medium">{note.title}</div>
              <div className="flex items-center mt-2">
                <div className="leading-relaxed text-slate-500">
                  {note.description}
                </div>
                <DashboardActionMenu actions={NOTE_ACTIONS} className="ml-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImportantNotesSection;
