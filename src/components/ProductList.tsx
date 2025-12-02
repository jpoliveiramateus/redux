import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchProducts } from "../redux/features/cart";

import { ProductCard } from "./ProductCard";

export const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();

  const { products, status } = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto" />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center py-12">
        <p className="text-white text-xl">Erro ao carregar produtos</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white text-xl">Nenhum produto encontrado</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
