import Button from "@/base-components/Button";
import { FormInline, FormInput, FormLabel, FormSelect } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";
import { PRODUCT_TRANSACTION_FILTER_STATUS_OPTIONS } from "../constants";

function ProductTransactionFilter() {
  return (
    <div className="flex flex-col xl:flex-row gap-y-3">
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="product-transaction-invoice">Invoice</FormLabel>
        <FormInput
          id="product-transaction-invoice"
          type="text"
          className="w-full"
          placeholder="Invoice.."
        />
      </FormInline>
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="product-transaction-status">Status</FormLabel>
        <FormSelect
          id="product-transaction-status"
          className="w-full"
          aria-label="Default select example"
        >
          {PRODUCT_TRANSACTION_FILTER_STATUS_OPTIONS.map((option) => (
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

export default ProductTransactionFilter;
