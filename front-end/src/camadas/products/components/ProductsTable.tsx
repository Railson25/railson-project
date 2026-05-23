import Table from "@/base-components/Table";
import fakerData from "@/utils/faker";
import _ from "lodash";
import ProductTableRow from "./ProductTableRow";

function ProductsTable() {
  return (
    <div className="overflow-auto intro-y lg:overflow-visible">
      <Table className="border-spacing-y-[10px] border-separate">
        <Table.Tbody>
          {_.take(fakerData, 9).map((product, productKey) => (
            <ProductTableRow key={productKey} product={product} />
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default ProductsTable;
