import ProductDetailHeader from "../components/ProductDetailHeader";
import ProductDetailSidebar from "../components/ProductDetailSidebar";
import ProductDetailTabs from "../components/ProductDetailTabs";

function ProductDetail() {
  return (
    <>
      <ProductDetailHeader />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <ProductDetailSidebar />
        <ProductDetailTabs />
      </div>
    </>
  );
}

export default ProductDetail;
