import fakerData from "@/utils/faker";
import { ORDER_DETAIL_SECTIONS } from "../constants";
import OrderDetailCard from "./OrderDetailCard";
import OrderTrackingPanel from "./OrderTrackingPanel";

function OrderDetailSidebar() {
  const detailSections = ORDER_DETAIL_SECTIONS.map((section) => {
    if (section.title !== "Buyer Details") {
      return section;
    }

    return {
      ...section,
      items: section.items.map((item) =>
        item.label === "Name"
          ? {
              ...item,
              value: fakerData[0].users[0].name,
            }
          : item
      ),
    };
  });

  return (
    <div className="col-span-12 2xl:col-span-4">
      {detailSections.map((section, sectionKey) => (
        <div key={section.title} className={sectionKey > 0 ? "mt-5" : undefined}>
          <OrderDetailCard section={section} />
        </div>
      ))}
      <OrderTrackingPanel />
    </div>
  );
}

export default OrderDetailSidebar;
