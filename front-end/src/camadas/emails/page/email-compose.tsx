import EmailComposeForm from "../components/EmailComposeForm";
import EmailLayout from "../components/EmailLayout";

function EmailCompose() {
  return (
    <EmailLayout contentClassName="p-5 pb-16">
      <EmailComposeForm />
    </EmailLayout>
  );
}

export default EmailCompose;
