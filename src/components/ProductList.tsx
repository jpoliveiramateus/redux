import { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

type Props = {
  products: Product[];
};

export const ProductList: React.FC<Props> = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white text-xl">Nenhum produto disponível</p>
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
