import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/api";
import type { ProductMutationResponse } from "../types";
import { productQueryKey } from "./useProductQuery";
import { PRODUCTS_QUERY_KEY } from "./useProductsQuery";

type UpdateProductPayload = {
  productId: string;
  formData: FormData;
};

export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<ProductMutationResponse, any, UpdateProductPayload>({
    mutationFn: async ({ productId, formData }: UpdateProductPayload) => {
      const { data } = await api.put<ProductMutationResponse>(
        `/products/${productId}`,
        formData
      );
      return data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
      queryClient.invalidateQueries({
        queryKey: productQueryKey(variables.productId),
      });
    },
  });
};
