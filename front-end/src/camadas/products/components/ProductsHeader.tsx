import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";

function ProductsHeader() {
  return (
    <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
      <h2 className="mr-auto text-lg font-medium">Products</h2>
      <div className="flex flex-wrap w-full mt-4 sm:w-auto gap-y-3 sm:mt-0">
        <Button variant="primary" className="mr-2 shadow-md">
          <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Product
        </Button>
        <Button className="!box">
          <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Download Report
        </Button>
      </div>
    </div>
  );
}

export default ProductsHeader;
