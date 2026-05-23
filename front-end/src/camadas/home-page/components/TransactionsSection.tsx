import Button from "@/base-components/Button";
import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import fakerData from "@/utils/faker";
import _ from "lodash";
import { cn } from "../../../../UI/lib/utils";

function TransactionsSection() {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
      <DashboardSectionHeader
        title="Transactions"
        animation="intro-x"
        viewMoreHref=""
      />
      <div className="mt-4">
        {_.take(fakerData, 4).map((faker, fakerKey) => (
          <div key={fakerKey} className="intro-x">
            <div className="flex items-center px-5 py-3 mb-3 box zoom-in">
              <div className="mr-auto">
                <div className="font-medium">{faker.users[0].name}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {faker.dates[0]}
                </div>
              </div>
              <div
                className={cn({
                  "text-success": faker.trueFalse[0],
                  "text-danger": !faker.trueFalse[0],
                })}
              >
                {faker.trueFalse[0] ? "+" : "-"}${faker.totals[0]}
              </div>
            </div>
          </div>
        ))}
        <Button
          as="a"
          href=""
          className="w-full py-3 border-dashed intro-x border-slate-300 dark:border-darkmode-300"
        >
          View More
        </Button>
      </div>
    </div>
  );
}

export default TransactionsSection;
