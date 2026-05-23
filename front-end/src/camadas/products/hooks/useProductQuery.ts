import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api";
import type { ProductMutationResponse } from "../types";

export const productQueryKey = (productId: string) =>
  ["products", productId] as const;

export const useProductQuery = (productId?: string) => {
  return useQuery<ProductMutationResponse>({
    queryKey: productQueryKey(productId ?? ""),
    enabled: Boolean(productId),
    queryFn: async () => {
      const { data } = await api.get<ProductMutationResponse>(
        `/products/${productId}`
      );
      return data;
    },
  });
};
