import Button from "@/base-components/Button";
import { FormInline, FormInput, FormLabel, FormSelect } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";
import { ORDER_STATUS_OPTIONS } from "../constants";
import type { OrderStatus } from "../types";

export type OrdersFilterValues = {
  invoice: string;
  buyerName: string;
  status: OrderStatus | "All";
};

type OrdersFilterProps = {
  values: OrdersFilterValues;
  onChange: (values: OrdersFilterValues) => void;
};

function OrdersFilter({ values, onChange }: OrdersFilterProps) {
  const updateFilter = <Key extends keyof OrdersFilterValues>(
    key: Key,
    value: OrdersFilterValues[Key]
  ) => {
    onChange({
      ...values,
      [key]: value,
    });
  };

  return (
    <div className="flex flex-col p-5 intro-y box mt-7 xl:flex-row gap-y-3">
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="invoice">Invoice</FormLabel>
        <FormInput
          id="invoice"
          type="text"
          className="w-full"
          placeholder="Invoice.."
          value={values.invoice}
          onChange={(event) => updateFilter("invoice", event.target.value)}
        />
      </FormInline>
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="buyer-name">Buyer Name</FormLabel>
        <FormInput
          id="buyer-name"
          type="text"
          className="w-full"
          placeholder="Buyer name.."
          value={values.buyerName}
          onChange={(event) => updateFilter("buyerName", event.target.value)}
        />
      </FormInline>
      <FormInline className="flex-col items-start flex-1 xl:flex-row xl:items-center gap-y-2 xl:mr-6">
        <FormLabel htmlFor="status">Status</FormLabel>
        <FormSelect
          id="status"
          className="w-full"
          aria-label="Default select example"
          value={values.status}
          onChange={(event) =>
            updateFilter("status", event.target.value as OrdersFilterValues["status"])
          }
        >
          <option value="All">All</option>
          {ORDER_STATUS_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FormSelect>
      </FormInline>
      <Button type="button" variant="primary" className="shadow-md">
        <Lucide icon="Search" className="w-4 h-4 mr-2" /> Filter
      </Button>
    </div>
  );
}

export default OrdersFilter;
