export interface Category {
  id: number
  name: string
  slug: string
  subcategories?: Category[]
}

export interface CategoryResponse {
  categories: Category[]
}

export interface SubcategoryProduct {
  id: number
  name: string
  slug: string
  image: string
  price: number
}

export interface SubcategoryResponse {
  products: SubcategoryProduct[]
  name: string
} 