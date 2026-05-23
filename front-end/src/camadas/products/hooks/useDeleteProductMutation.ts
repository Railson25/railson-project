import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/api";
import { PRODUCTS_QUERY_KEY } from "./useProductsQuery";

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, any, string>({
    mutationFn: async (productId: string) => {
      await api.delete(`/products/${productId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
};
