import { useAxios } from "@/hooks/useAxios"
import { SubcategoryResponse } from "@/types/category"
import { useQuery } from "@tanstack/react-query"

export const useSubcategory = (slug: string) => {
  const request = useAxios()

  return useQuery({
    queryKey: ["subcategory", slug],
    queryFn: async () => {
      const data = await request<SubcategoryResponse>({
        url: `/categories/${slug}`
      })
      return data
    },
    enabled: !!slug // Faqat slug mavjud bo'lganda so'rov yuborish
  })
} 