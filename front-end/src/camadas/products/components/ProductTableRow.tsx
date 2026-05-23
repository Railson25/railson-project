import { FormSwitch } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";
import Table from "@/base-components/Table";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../../UI/lib/utils";
import { PRODUCT_DETAIL_ROUTE } from "../constants";
import ProductImageStack from "./ProductImageStack";

type ProductData = (typeof import("@/utils/faker").default)[number];

type ProductTableRowProps = {
  product: ProductData;
};

const cellClassName =
  "first:rounded-l-md last:rounded-r-md bg-white border border-r-0 border-l-0 first:border-l last:border-r border-slate-200 dark:bg-darkmode-600 dark:border-darkmode-600 shadow-[20px_3px_20px_#0000000b]";

function ProductTableRow({ product }: ProductTableRowProps) {
  const preventActionNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <Table.Tr className="intro-x">
      <Table.Td className={cn(cellClassName, "w-40 py-5")}>
        <ProductImageStack product={product} />
      </Table.Td>
      <Table.Td className={cellClassName}>
        <Link to={PRODUCT_DETAIL_ROUTE} className="font-medium whitespace-nowrap">
          {product.products[0].name}
        </Link>
        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
          {product.products[0].category}
        </div>
      </Table.Td>
      <Table.Td className={cn(cellClassName, "text-center")}>
        {product.products[0].price}
      </Table.Td>
      <Table.Td className={cn(cellClassName, "text-center")}>
        {product.stocks[0]}
      </Table.Td>
      <Table.Td className={cn(cellClassName, "w-40")}>
        <FormSwitch>
          <FormSwitch.Input
            checked={product.trueFalse[0]}
            onChange={() => {}}
            className="mx-auto"
            type="checkbox"
          />
        </FormSwitch>
      </Table.Td>
      <Table.Td
        className={cn(
          cellClassName,
          "w-56 py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400"
        )}
      >
        <div className="flex items-center justify-center">
          <a className="flex items-center mr-3" href="#" onClick={preventActionNavigation}>
            <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" /> Edit
          </a>
          <a
            className="flex items-center text-danger"
            href="#"
            onClick={preventActionNavigation}
            data-tw-toggle="modal"
            data-tw-target="#delete-confirmation-modal"
          >
            <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
          </a>
        </div>
      </Table.Td>
    </Table.Tr>
  );
}

export default ProductTableRow;
