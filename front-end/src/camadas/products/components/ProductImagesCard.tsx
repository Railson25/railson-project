import Lucide from "@/base-components/Lucide";
import fakerData from "@/utils/faker";

function ProductImagesCard() {
  return (
    <div className="p-5 mt-5 box intro-y">
      <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
        <div className="text-base font-medium truncate">Product Images</div>
        <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
      </div>
      <div className="grid grid-cols-12 gap-2 mt-2">
        {fakerData[0].images.slice(0, 7).map((image) => (
          <div key={image} className="h-16 col-span-3 cursor-pointer image-fit">
            <img
              alt="Rocketman - HTML Admin Template"
              className="rounded-md"
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImagesCard;
