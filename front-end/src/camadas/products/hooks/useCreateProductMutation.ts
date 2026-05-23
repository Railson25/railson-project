import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/api";
import type { ProductMutationResponse } from "../types";
import { PRODUCTS_QUERY_KEY } from "./useProductsQuery";

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<ProductMutationResponse, any, FormData>({
    mutationFn: async (formData: FormData) => {
      const { data } = await api.post<ProductMutationResponse>(
        "/products",
        formData
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
};
