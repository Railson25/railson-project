import fakerData from "@/utils/faker";
import { PRODUCT_DETAIL_INFO } from "../constants";
import ProductDescriptionCard from "./ProductDescriptionCard";
import ProductImagesCard from "./ProductImagesCard";
import ProductInfoCard from "./ProductInfoCard";

function ProductDetailSidebar() {
  const detailSections = PRODUCT_DETAIL_INFO.map((section) => {
    if (section.title !== "Product Details") {
      return section;
    }

    return {
      ...section,
      items: [
        ...section.items,
        {
          icon: "Map" as const,
          label: "Category",
          value: fakerData[0].products[0].category,
          href: "#",
        },
      ],
    };
  });

  return (
    <div className="col-span-12 2xl:col-span-3">
      {detailSections.map((section, sectionKey) => (
        <div key={section.title} className={sectionKey > 0 ? "mt-5" : undefined}>
          <ProductInfoCard section={section} />
        </div>
      ))}
      <ProductDescriptionCard />
      <ProductImagesCard />
    </div>
  );
}

export default ProductDetailSidebar;
