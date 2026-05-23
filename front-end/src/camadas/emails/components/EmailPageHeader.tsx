import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";
import { useNavigate } from "react-router-dom";
import { EMAIL_COMPOSE_ROUTE } from "../constants";

function EmailPageHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
      <h2 className="mr-auto text-lg font-medium">Emails</h2>
      <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
        <Button
          variant="primary"
          className="mr-2 shadow-md"
          onClick={() => navigate(EMAIL_COMPOSE_ROUTE)}
        >
          <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Compose New Mail
        </Button>
        <Button className="!box">
          <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
        </Button>
      </div>
    </div>
  );
}

export default EmailPageHeader;
