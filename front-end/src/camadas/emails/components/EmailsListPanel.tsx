import fakerData from "@/utils/faker";
import EmailListItem from "./EmailListItem";
import EmailsListToolbar from "./EmailsListToolbar";
import EmailsSelectionToolbar from "./EmailsSelectionToolbar";

function EmailsListPanel() {
  return (
    <>
      <EmailsListToolbar />
      <EmailsSelectionToolbar />
      <div className="overflow-x-auto sm:overflow-x-visible">
        {fakerData.map((email, emailKey) => (
          <EmailListItem key={emailKey} email={email} />
        ))}
      </div>
      <div className="flex flex-col items-center p-5 text-center sm:flex-row sm:text-left text-slate-500">
        <div>4.41 GB (25%) of 17 GB used Manage</div>
        <div className="mt-2 sm:ml-auto sm:mt-0">
          Last account activity: 36 minutes ago
        </div>
      </div>
    </>
  );
}

export default EmailsListPanel;
