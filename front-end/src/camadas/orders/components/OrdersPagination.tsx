import { FormSelect } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";
import Pagination from "@/base-components/Pagination";
import { cn } from "../../../../UI/lib/utils";
import { ORDER_PAGE_SIZE_OPTIONS } from "../constants";

type OrdersPaginationProps = {
  className?: string;
};

function OrdersPagination({ className = "mt-5 mb-12" }: OrdersPaginationProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center intro-y sm:flex-row sm:flex-nowrap",
        className
      )}
    >
      <Pagination className="w-full sm:w-auto sm:mr-auto">
        <Pagination.Link>
          <Lucide icon="ChevronsLeft" className="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronLeft" className="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>...</Pagination.Link>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Link active>2</Pagination.Link>
        <Pagination.Link>3</Pagination.Link>
        <Pagination.Link>...</Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronRight" className="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronsRight" className="w-4 h-4" />
        </Pagination.Link>
      </Pagination>
      <FormSelect className="w-20 mt-3 !box sm:mt-0">
        {ORDER_PAGE_SIZE_OPTIONS.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </FormSelect>
    </div>
  );
}

export default OrdersPagination;
