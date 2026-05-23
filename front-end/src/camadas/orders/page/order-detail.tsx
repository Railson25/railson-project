import OrderDetailHeader from "../components/OrderDetailHeader";
import OrderDetailSidebar from "../components/OrderDetailSidebar";
import OrderProductsPanel from "../components/OrderProductsPanel";

function OrderDetail() {
  return (
    <>
      <OrderDetailHeader />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <OrderDetailSidebar />
        <OrderProductsPanel />
      </div>
    </>
  );
}

export default OrderDetail;
