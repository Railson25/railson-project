import GeneralReportSection from "../components/GeneralReportSection";
import HomeSidebar from "../components/HomeSidebar";
import ProductReportSection from "../components/ProductReportSection";
import SalesPerformanceSection from "../components/SalesPerformanceSection";
import SalesReportSection from "../components/SalesReportSection";
import SellerDonutReportSection from "../components/SellerDonutReportSection";
import SellerReportTableSection from "../components/SellerReportTableSection";
import TopCountriesSection from "../components/TopCountriesSection";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          <GeneralReportSection />
          <SalesReportSection />
          <TopCountriesSection />
          <ProductReportSection />
          <SellerReportTableSection />
          <SellerDonutReportSection />
          <SalesPerformanceSection />
        </div>
      </div>
      <HomeSidebar />
    </div>
  );
}

export default Main;
