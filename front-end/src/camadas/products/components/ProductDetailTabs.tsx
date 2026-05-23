import Lucide from "@/base-components/Lucide";
import { Tab } from "@/base-components/Headless";
import { PRODUCT_TRANSACTION_TABS } from "../constants";
import ProductTransactionFilter from "./ProductTransactionFilter";
import ProductTransactionsTable from "./ProductTransactionsTable";
import ProductsPagination from "./ProductsPagination";

function ProductDetailTabs() {
  return (
    <Tab.Group className="col-span-12 2xl:col-span-9">
      <div className="p-3 box intro-y">
        <Tab.List variant="pills" className="flex-col md:flex-row">
          {PRODUCT_TRANSACTION_TABS.map((tab) => (
            <Tab key={tab.label}>
              <Tab.Button
                className="w-full flex items-center justify-center !rounded-lg py-3"
                as="button"
              >
                <Lucide icon={tab.icon} className="w-4 h-4 mr-2" />
                {tab.label}
              </Tab.Button>
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel>
          <div className="p-5 mt-5 box intro-y">
            <ProductTransactionFilter />
            <ProductTransactionsTable />
          </div>
          <ProductsPagination className="mt-5 mb-16" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default ProductDetailTabs;
