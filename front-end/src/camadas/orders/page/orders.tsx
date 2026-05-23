import OrdersFilter from "../components/OrdersFilter";
import OrdersHeader from "../components/OrdersHeader";
import OrdersPagination from "../components/OrdersPagination";
import OrdersTable from "../components/OrdersTable";

function Orders() {
  return (
    <>
      <OrdersHeader />
      <OrdersFilter />
      <OrdersTable />
      <OrdersPagination />
    </>
  );
}

export default Orders;
