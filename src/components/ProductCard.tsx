import { useDispatch } from "react-redux";

import { Product } from "../types/product";
import { addProduct } from "../redux/features/cart";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleAddToCart();
    }
  };

  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700">
      <div className="relative h-64 overflow-hidden bg-gray-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold border border-gray-600">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="space-y-4">
          <span className="text-3xl font-bold text-green-400 block">
            {formattedPrice}
          </span>
          <button
            onClick={handleAddToCart}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label={`Adicionar ${product.name} ao carrinho`}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};
