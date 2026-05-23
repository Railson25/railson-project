import { useMemo, useState } from "react";
import fakerData from "@/utils/faker";
import _ from "lodash";
import OrdersFilter, {
  type OrdersFilterValues,
} from "../components/OrdersFilter";
import OrdersHeader from "../components/OrdersHeader";
import OrdersPagination from "../components/OrdersPagination";
import OrdersTable from "../components/OrdersTable";
import type { OrderListItem } from "../types";

const getOrderInvoice = (order: OrderListItem) =>
  `INV-${order.totals[0]}807556`;

function Orders() {
  const [filters, setFilters] = useState<OrdersFilterValues>({
    invoice: "",
    buyerName: "",
    status: "All",
  });

  const orders = useMemo(() => _.take(fakerData, 9), []);

  const filteredOrders = useMemo(() => {
    const invoiceSearch = filters.invoice.trim().toLowerCase();
    const buyerSearch = filters.buyerName.trim().toLowerCase();

    return orders.filter((order) => {
      const invoice = getOrderInvoice(order).toLowerCase();
      const buyerName = order.users[0].name.toLowerCase();
      const status = order.trueFalse[0] ? "Completed" : "Pending Payment";

      return (
        invoice.includes(invoiceSearch) &&
        buyerName.includes(buyerSearch) &&
        (filters.status === "All" || status === filters.status)
      );
    });
  }, [filters, orders]);

  return (
    <div className="mx-auto 3xl:max-w-[1920px]">
      <OrdersHeader />
      <OrdersFilter values={filters} onChange={setFilters} />
      <OrdersTable orders={filteredOrders} />
      <OrdersPagination />
    </div>
  );
}

export default Orders;
