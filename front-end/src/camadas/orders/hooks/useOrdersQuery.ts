import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api";
import type { OrderResponse } from "../types";

export const ORDERS_QUERY_KEY = ["orders"] as const;

export const useOrdersQuery = () => {
  return useQuery<OrderResponse[]>({
    queryKey: ORDERS_QUERY_KEY,
    queryFn: async () => {
      const { data } = await api.get<OrderResponse[]>("/orders");
      return data;
    },
  });
};
