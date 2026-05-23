import Lucide from "@/base-components/Lucide";
import fakerData from "@/utils/faker";

function ProductDescriptionCard() {
  return (
    <div className="p-5 mt-5 box intro-y">
      <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
        <div className="text-base font-medium truncate">Description</div>
        <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
      </div>
      <div>{fakerData[0].news[0].shortContent}</div>
    </div>
  );
}

export default ProductDescriptionCard;
