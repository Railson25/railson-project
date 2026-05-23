import Table from "@/base-components/Table";
import fakerData from "@/utils/faker";
import _ from "lodash";
import type { ProductListItem } from "../types";
import ProductTableRow from "./ProductTableRow";

type ProductsTableProps = {
  onEditProduct: (product: ProductListItem) => void;
};

function ProductsTable({ onEditProduct }: ProductsTableProps) {
  return (
    <div className="overflow-auto intro-y lg:overflow-visible">
      <Table className="border-spacing-y-[10px] border-separate">
        <Table.Tbody>
          {_.take(fakerData, 9).map((product, productKey) => (
            <ProductTableRow
              key={productKey}
              product={product}
              onEditProduct={onEditProduct}
            />
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default ProductsTable;
