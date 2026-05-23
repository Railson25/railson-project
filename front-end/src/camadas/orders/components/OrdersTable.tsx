import Table from "@/base-components/Table";
import fakerData from "@/utils/faker";
import _ from "lodash";
import OrderTableRow from "./OrderTableRow";

function OrdersTable() {
  return (
    <div className="overflow-auto intro-y lg:overflow-visible">
      <Table className="border-spacing-y-[10px] border-separate">
        <Table.Tbody>
          {_.take(fakerData, 9).map((order, orderKey) => (
            <OrderTableRow key={orderKey} order={order} />
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default OrdersTable;
