import Table from "@/base-components/Table";
import type { OrderListItem } from "../types";
import OrderTableRow from "./OrderTableRow";

type OrdersTableProps = {
  orders: OrderListItem[];
};

function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <div className="overflow-auto intro-y lg:overflow-visible">
      <Table className="border-spacing-y-[10px] border-separate">
        <Table.Tbody>
          {orders.map((order, orderKey) => (
            <OrderTableRow key={orderKey} order={order} />
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default OrdersTable;
