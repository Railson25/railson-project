import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";
import fakerData from "@/utils/faker";

function OrderDetailHeader() {
  return (
    <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
      <h2 className="flex items-center mr-auto text-lg font-medium">
        Orders <Lucide icon="ArrowRight" className="w-4 h-4 mx-2 !stroke-2" />
        {"#INV-" + fakerData[0].totals[0] + "807556"}
      </h2>
      <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
        <Button variant="primary" className="mr-2 shadow-md">
          <Lucide icon="Download" className="w-4 h-4 mr-2" /> Download Report
        </Button>
      </div>
    </div>
  );
}

export default OrderDetailHeader;
