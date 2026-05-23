import EmailDetailContent from "../components/EmailDetailContent";
import EmailLayout from "../components/EmailLayout";

function EmailDetail() {
  return (
    <EmailLayout activeFolder="Inbox" contentClassName="p-5">
      <EmailDetailContent />
    </EmailLayout>
  );
}

export default EmailDetail;
