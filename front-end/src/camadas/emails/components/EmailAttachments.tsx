import Lucide from "@/base-components/Lucide";
import { EMAIL_ATTACHMENTS, EMAIL_ATTACHMENTS_SUMMARY } from "../constants";

function EmailAttachments() {
  return (
    <div className="pb-16 mt-10">
      <div className="flex flex-wrap mb-5 gap-y-2">
        <div className="mr-auto font-medium">{EMAIL_ATTACHMENTS_SUMMARY}</div>
        <div className="flex">
          <a href="#" className="w-24 text-primary">
            View All
          </a>
          <a href="#" className="w-24 ml-2 text-primary">
            Download All
          </a>
        </div>
      </div>
      {EMAIL_ATTACHMENTS.map((attachment) => (
        <div key={attachment.fileName} className="flex flex-wrap mt-3 gap-y-2">
          <div className="flex items-center mr-auto">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" />
            {attachment.fileName} ({attachment.size})
          </div>
          <div className="flex">
            <a href="#" className="w-24 text-primary">
              View
            </a>
            <a href="#" className="w-24 ml-2 text-primary">
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmailAttachments;
