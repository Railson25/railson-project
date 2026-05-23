import Button from "@/base-components/Button";
import { FormInline, FormInput, FormLabel, FormSelect } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";
import TomSelect from "@/base-components/TomSelect";
import fakerData from "@/utils/faker";
import { useState } from "react";
import { INITIAL_PRODUCT_CATEGORIES, PRODUCT_STATUS_OPTIONS } from "../constants";

function ProductsFilter() {
  const [categories, setCategories] = useState(INITIAL_PRODUCT_CATEGORIES);

  return (
    <div className="flex flex-col p-5 intro-y box mt-7 xl:flex-row gap-y-3">
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="crud-form-1">Product Name</FormLabel>
        <FormInput
          id="crud-form-1"
          type="text"
          className="w-full"
          placeholder="Product name.."
        />
      </FormInline>
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="crud-form-2">Category</FormLabel>
        <TomSelect
          id="crud-form-2"
          value={categories}
          onChange={setCategories}
          className="flex-1 w-full"
          multiple
        >
          {fakerData.map((faker, fakerKey) => (
            <option key={fakerKey} value={faker.products[0].category}>
              {faker.products[0].category}
            </option>
          ))}
        </TomSelect>
      </FormInline>
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="product-status">Status</FormLabel>
        <FormSelect
          id="product-status"
          className="w-full"
          aria-label="Default select example"
        >
          {PRODUCT_STATUS_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </FormSelect>
      </FormInline>
      <Button variant="primary" className="shadow-md">
        <Lucide icon="Search" className="w-4 h-4 mr-2" /> Filter
      </Button>
    </div>
  );
}

export default ProductsFilter;
