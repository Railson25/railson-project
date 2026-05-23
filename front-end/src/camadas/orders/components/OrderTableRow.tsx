import Lucide from "@/base-components/Lucide";
import Table from "@/base-components/Table";
import { Link } from "react-router-dom";
import { cn } from "../../../../UI/lib/utils";
import { ORDER_DETAIL_ROUTE } from "../constants";
import type { OrderListItem } from "../types";
import OrderStatusBadge from "./OrderStatusBadge";

type OrderTableRowProps = {
  order: OrderListItem;
};

const cellClassName =
  "first:rounded-l-md last:rounded-r-md bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]";

function OrderTableRow({ order }: OrderTableRowProps) {
  const isCompleted = order.trueFalse[0];

  return (
    <Table.Tr className="intro-x">
      <Table.Td className={cn(cellClassName, "w-40 py-8")}>
        <Link
          to={ORDER_DETAIL_ROUTE}
          className="underline decoration-dotted whitespace-nowrap"
        >
          {"#INV-" + order.totals[0] + "807556"}
        </Link>
      </Table.Td>
      <Table.Td className={cellClassName}>
        <div className="font-medium whitespace-nowrap">{order.users[0].name}</div>
        <div className="mt-1 text-xs text-slate-500">
          {isCompleted ? "Ohio, Ohio" : "California, LA"}
        </div>
      </Table.Td>
      <Table.Td className={cellClassName}>
        <OrderStatusBadge completed={isCompleted} />
      </Table.Td>
      <Table.Td className={cellClassName}>
        <div className="whitespace-nowrap">
          {isCompleted ? "Direct bank transfer" : "Checking payments"}
        </div>
        <div className="mt-1 text-xs text-slate-500">
          {isCompleted ? "25 March, 12:55" : "30 March, 11:00"}
        </div>
      </Table.Td>
      <Table.Td className={cn(cellClassName, "text-right")}>
        <div className="pr-16">${order.totals[0] + ",000,00"}</div>
      </Table.Td>
      <Table.Td
        className={cn(
          cellClassName,
          "w-56 py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
        )}
      >
        <div className="flex items-center justify-center">
          <Link
            className="flex items-center mr-3 whitespace-nowrap"
            to={ORDER_DETAIL_ROUTE}
          >
            <Lucide icon="FileText" className="w-4 h-4 mr-1" /> View Details
          </Link>
        </div>
      </Table.Td>
    </Table.Tr>
  );
}

export default OrderTableRow;
