import { useAxios } from "@/hooks/useAxios";
import { BrandsResponse } from "@/types/brands";
import { useQuery } from "@tanstack/react-query";

export const useBrands = () => {
  const request = useAxios();

  return useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const data = await request<BrandsResponse>({
        url: "/brand",
      });
      return data;
    },
  });
};
