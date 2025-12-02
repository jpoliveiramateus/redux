import { useDispatch } from "react-redux";

import { useAppSelector } from "../redux/hooks";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProduct,
  selectSelectedProductsTotalPrice,
} from "../redux/features/cart";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const dispatch = useDispatch();

  const { selectedProducts } = useAppSelector((state) => state.cartReducer);
  const selectedProductsTotalPrice = useAppSelector(
    selectSelectedProductsTotalPrice
  );

  const handleRemove = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const handleIncreaseQuantity = (productId: number) => {
    dispatch(increaseProductQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: number) => {
    dispatch(decreaseProductQuantity(productId));
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        aria-label="Close cart"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Escape") {
            onClose();
          }
        }}
      />

      <div className="fixed top-0 right-0 h-full w-[500px] bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">Seu Carrinho</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            {selectedProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <p className="text-lg">Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-700 rounded-lg p-4 border border-gray-600"
                  >
                    <div className="flex gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          R$ {product.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-2 bg-gray-600 rounded-full px-3 py-1">
                            <button
                              className="text-white hover:text-red-400 transition-colors"
                              aria-label="Decrementar"
                              onClick={() => handleDecreaseQuantity(product.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>
                            <span className="text-white font-semibold w-8 text-center">
                              {product.quantity}
                            </span>
                            <button
                              className="text-white hover:text-green-400 transition-colors"
                              aria-label="Incrementar"
                              onClick={() => handleIncreaseQuantity(product.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>
                          <button
                            onClick={() => handleRemove(product.id)}
                            className="text-red-400 hover:text-red-300 transition-colors text-sm font-semibold"
                            aria-label="Remover produto"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">
                          R$ {(product.price * product.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-white">Total:</span>
              <span className="text-2xl font-bold text-green-500">
                R$ {selectedProductsTotalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
