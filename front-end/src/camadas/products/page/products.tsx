import { useMemo, useState } from "react";
import ProductsFilter from "../components/ProductsFilter";
import ProductFormView from "../components/ProductFormView";
import ProductsHeader from "../components/ProductsHeader";
import ProductsPagination from "../components/ProductsPagination";
import ProductsTable from "../components/ProductsTable";
import type {
  ProductFormMode,
  ProductFormValues,
} from "../schemas/product-schema";
import type { ProductListItem } from "../types";

type ProductsView = "list" | "form";

const getProductFormValues = (
  product?: ProductListItem
): ProductFormValues => {
  const productInfo = product?.products[0];

  return {
    name: productInfo?.name ?? "",
    category: productInfo?.category ?? "PC & Laptop",
    price: productInfo?.price ?? "",
    stock: product?.stocks[0] ?? 0,
    sku: product ? `INV-${product.totals[0]}807556` : "",
    releaseDate: product?.dates[0] ?? "",
    brand: product ? "Apple" : "",
    status: product?.trueFalse[0] ? "Active" : "Inactive",
    condition: "New",
    signalStatus: "Activated",
    description: product?.news[0].shortContent ?? "",
    images: [],
    existingImages: product?.images.slice(0, 7) ?? [],
  };
};

function Products() {
  const [view, setView] = useState<ProductsView>("list");
  const [formMode, setFormMode] = useState<ProductFormMode>("create");
  const [selectedProduct, setSelectedProduct] = useState<ProductListItem>();

  const initialFormValues = useMemo(
    () => getProductFormValues(selectedProduct),
    [selectedProduct]
  );

  const showCreateForm = () => {
    setSelectedProduct(undefined);
    setFormMode("create");
    setView("form");
  };

  const showUpdateForm = (product: ProductListItem) => {
    setSelectedProduct(product);
    setFormMode("update");
    setView("form");
  };

  const showProductsList = () => {
    setView("list");
    setSelectedProduct(undefined);
  };

  const handleProductSubmit = (
    values: ProductFormValues,
    formData: FormData
  ) => {
    console.log("Product form values:", values);
    console.log("Product form data:", Array.from(formData.entries()));
  };

  if (view === "form") {
    return (
      <ProductFormView
        mode={formMode}
        initialValues={initialFormValues}
        onCancel={showProductsList}
        onSubmit={handleProductSubmit}
      />
    );
  }

  return (
    <div className="mx-auto 3xl:max-w-[1920px]">
      <ProductsHeader onCreateProduct={showCreateForm} />
      <ProductsFilter />
      <ProductsTable onEditProduct={showUpdateForm} />
      <ProductsPagination />
    </div>
  );
}

export default Products;
