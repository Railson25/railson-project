import Button from "@/base-components/Button";
import FileIcon from "@/base-components/FileIcon";
import DashboardActionMenu from "@/components/DashboardActionMenu";
import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import { SHARED_FILE_ACTIONS, SHARED_FILES } from "../constants";

function SharedFilesSection() {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
      <DashboardSectionHeader
        title="Shared Files"
        animation="intro-x"
        viewMoreHref=""
      />
      <div className="mt-4">
        <div className="intro-x">
          {SHARED_FILES.map((file) => (
            <div key={file.name} className="flex items-center px-5 py-3 mb-3 box">
              <FileIcon className="w-12" variant={file.variant} />
              <div className="ml-4 mr-auto">
                <div className="font-medium">{file.name}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {file.description}
                </div>
              </div>
              <DashboardActionMenu actions={SHARED_FILE_ACTIONS} />
            </div>
          ))}
        </div>
        <Button
          as="a"
          href=""
          className="w-full py-3 border-dashed intro-x border-slate-300 dark:border-darkmode-300"
        >
          Launch File Manager
        </Button>
      </div>
    </div>
  );
}

export default SharedFilesSection;
