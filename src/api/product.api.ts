import { Product } from "../types/product";
import { products } from "../data/products";

export const fetchProducts = async (): Promise<{ data: Product[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: products }), 2000);
  });
};
