import EmailLayout from "../components/EmailLayout";
import EmailsListPanel from "../components/EmailsListPanel";

function Emails() {
  return (
    <EmailLayout activeFolder="Inbox">
      <EmailsListPanel />
    </EmailLayout>
  );
}

export default Emails;
