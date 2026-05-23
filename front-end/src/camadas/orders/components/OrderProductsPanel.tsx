import Lucide from "@/base-components/Lucide";
import fakerData from "@/utils/faker";
import _ from "lodash";

function OrderProductsPanel() {
  return (
    <div className="col-span-12 2xl:col-span-8">
      <div className="p-5 box intro-y">
        <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <div className="text-base font-medium truncate">Product Details</div>
        </div>
        <div>
          {_.take(fakerData, 10).map((faker, fakerKey) => (
            <div
              key={fakerKey}
              className="flex flex-col items-center py-4 border-b border-dashed md:flex-row first:pt-0 last:border-0 last:pb-0 border-slate-200 dark:border-darkmode-400"
            >
              <div className="flex items-center md:mr-auto">
                <div className="w-16 h-16 image-fit">
                  <img
                    alt="Rocketman - HTML Admin Template"
                    className="border-2 border-white rounded-lg shadow-md"
                    src={faker.images[0]}
                  />
                </div>
                <div className="ml-5">
                  <div className="font-medium">{faker.products[0].name}</div>
                  <div className="mt-1 text-slate-500">
                    2 items x ${faker.totals[0] + ",000.00"}
                  </div>
                </div>
              </div>
              <div className="mt-5 mb-0 md:mr-12 md:mb-5">
                <a href="#" className="flex items-center justify-end">
                  <Lucide icon="Archive" className="w-4 h-4 mr-2" /> Product
                  history
                </a>
              </div>
              <div className="py-4 text-center border-dashed md:pl-12 md:pr-10 md:border-l md:text-left border-slate-200 dark:border-darkmode-400">
                <div className="text-slate-500">Total Price</div>
                <div className="mt-1 font-medium">$60.00</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderProductsPanel;
