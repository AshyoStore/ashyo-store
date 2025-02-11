export type Product = {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    image: string;
    brendId: number;
  };
  
  export type Brand = {
    id: number;
    name: string;
    image: string;
    products: Product[];
  };
  
  export type BrandsResponse = {
    message: string;
    brands: Brand[];
  };
  