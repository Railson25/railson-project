import Tippy from "@/base-components/Tippy";
import { cn } from "../../../../UI/lib/utils";

type ProductData = (typeof import("@/utils/faker").default)[number];

type ProductImageStackProps = {
  product: ProductData;
};

function ProductImageStack({ product }: ProductImageStackProps) {
  return (
    <div className="flex">
      {product.images.slice(0, 3).map((image, imageKey) => (
        <div
          key={image}
          className={cn("w-10 h-10 image-fit zoom-in", imageKey > 0 && "-ml-5")}
        >
          <Tippy
            as="img"
            alt="Rocketman - HTML Admin Template"
            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
            src={image}
            content={`Uploaded at ${product.dates[0]}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductImageStack;
