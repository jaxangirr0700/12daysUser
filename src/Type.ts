export type ProductType = {
  categoryId: number;
  createdAt: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
};

export type DataType = {
  items: ProductType[];
  limit: number;
  page: number;
  totalItems: number;
};
export type useMyStoreType = {
  loading: boolean;
  carts: ProductType[] | [];
};
