import ProductsFilter from "../components/ProductsFilter";
import ProductsHeader from "../components/ProductsHeader";
import ProductsPagination from "../components/ProductsPagination";
import ProductsTable from "../components/ProductsTable";

function Products() {
  return (
    <>
      <ProductsHeader />
      <ProductsFilter />
      <ProductsTable />
      <ProductsPagination />
    </>
  );
}

export default Products;
