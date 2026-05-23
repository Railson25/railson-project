import Button from "@/base-components/Button";
import { FormInline, FormInput, FormLabel, FormSelect } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";
import { ORDER_STATUS_OPTIONS } from "../constants";

function OrdersFilter() {
  return (
    <div className="flex flex-col p-5 intro-y box mt-7 xl:flex-row gap-y-3">
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="invoice">Invoice</FormLabel>
        <FormInput
          id="invoice"
          type="text"
          className="w-full"
          placeholder="Invoice.."
        />
      </FormInline>
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="buyer-name">Buyer Name</FormLabel>
        <FormInput
          id="buyer-name"
          type="text"
          className="w-full"
          placeholder="Buyer name.."
        />
      </FormInline>
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="status">Status</FormLabel>
        <FormSelect
          id="status"
          className="w-full"
          aria-label="Default select example"
        >
          {ORDER_STATUS_OPTIONS.map((option) => (
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

export default OrdersFilter;
