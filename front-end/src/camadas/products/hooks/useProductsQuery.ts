import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api";
import type { ProductMutationResponse } from "../types";

export const PRODUCTS_QUERY_KEY = ["products"] as const;

export const useProductsQuery = () => {
  return useQuery<ProductMutationResponse[]>({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: async () => {
      const { data } = await api.get<ProductMutationResponse[]>("/products");
      return data;
    },
  });
};
