import { cn } from "../../../../UI/lib/utils";

type OrderStatusBadgeProps = {
  completed: boolean;
};

function OrderStatusBadge({ completed }: OrderStatusBadgeProps) {
  return (
    <span
      className={cn(
        "px-2 py-1 text-xs border rounded-full whitespace-nowrap",
        completed
          ? "text-success bg-success/20 border-success/20"
          : "text-warning bg-warning/20 border-warning/20"
      )}
    >
      {completed ? "Completed" : "Pending Payment"}
    </span>
  );
}

export default OrderStatusBadge;
