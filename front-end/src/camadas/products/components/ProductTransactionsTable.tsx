import Lucide from "@/base-components/Lucide";
import Table from "@/base-components/Table";
import fakerData from "@/utils/faker";
import _ from "lodash";
import { cn } from "../../../../UI/lib/utils";

function ProductTransactionsTable() {
  return (
    <div className="overflow-auto lg:overflow-visible">
      <Table striped className="mt-5">
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="whitespace-nowrap !py-5">Invoice</Table.Th>
            <Table.Th className="whitespace-nowrap">Status</Table.Th>
            <Table.Th className="whitespace-nowrap">Buyer Name</Table.Th>
            <Table.Th className="whitespace-nowrap">Payment</Table.Th>
            <Table.Th className="text-center whitespace-nowrap">Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {_.take(fakerData, 12).map((faker, fakerKey) => {
            const isShipping = faker.trueFalse[0];

            return (
              <Table.Tr key={fakerKey}>
                <Table.Td className="!py-7">
                  <a href="#" className="underline decoration-dotted whitespace-nowrap">
                    {"#INV-" + faker.totals[0] + "807556"}
                  </a>
                </Table.Td>
                <Table.Td>
                  <div className="font-medium whitespace-nowrap">
                    {faker.users[0].name}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {isShipping ? "Ohio, Ohio" : "California, LA"}
                  </div>
                </Table.Td>
                <Table.Td>
                  <span
                    className={cn(
                      "px-2 py-1 text-xs border rounded-full whitespace-nowrap",
                      isShipping
                        ? "text-success bg-success/20 border-success/20"
                        : "text-warning bg-warning/20 border-warning/20"
                    )}
                  >
                    {isShipping ? "Shipping" : "Pending Payment"}
                  </span>
                </Table.Td>
                <Table.Td>
                  <div className="whitespace-nowrap">
                    {isShipping ? "Checking payments" : "Direct bank transfer"}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {isShipping ? "25 March, 12:55" : "30 March, 11:00"}
                  </div>
                </Table.Td>
                <Table.Td>
                  <a
                    className="flex items-center justify-center whitespace-nowrap"
                    href="#"
                  >
                    <Lucide icon="FileText" className="w-4 h-4 mr-1" />
                    View Details
                  </a>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default ProductTransactionsTable;
