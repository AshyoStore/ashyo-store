import { useAxios } from "@/hooks/useAxios"
import { CategoryResponse } from "@/types/category"
import { useQuery } from "@tanstack/react-query"

export const useCategories = () => {
  const request = useAxios()

  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await request<CategoryResponse>({
        url: "/categories"
      })
      return data
    }
  })
} 