import ReportBarChart1 from "@/components/ReportBarChart1";
import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import { Tab } from "../../../../UI";
import { PRODUCT_REPORT_TABS } from "../constants";

function ProductReportSection() {
  return (
    <div className="col-span-12 mt-4 sm:col-span-6 lg:col-span-3 lg:mt-7">
      <DashboardSectionHeader title="Product Report" viewMoreHref="" />
      <Tab.Group className="p-5 mt-4 intro-y box">
        <Tab.List variant="boxed-tabs" className="w-4/5 mx-auto">
          {PRODUCT_REPORT_TABS.map((tab) => (
            <Tab key={tab}>
              <Tab.Button as="button" className="w-full px-2">
                {tab}
              </Tab.Button>
            </Tab>
          ))}
        </Tab.List>
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="text-2xl font-medium leading-7">17.421</div>
          <div className="mt-1 text-slate-500 dark:text-slate-500">
            Total Products
          </div>
        </div>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <div className="mx-auto -mb-2 w-44 lg:w-auto lg:-ml-2">
              <ReportBarChart1 height={192} />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default ProductReportSection;
