import { useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../redux/hooks";
import { login, logout } from "../redux/features/user";
import { selectSelectedProductsCount } from "../redux/features/cart";

import { CartDrawer } from "./CartDrawer";

export const ShopHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { user } = useAppSelector((state) => state.userReducer);
  const productsCount = useAppSelector(selectSelectedProductsCount);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email: "teste@teste.com", name: "Teste" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <header className="bg-gray-800 border-b border-gray-700 shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                alt="Redux Logo"
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-4xl font-bold text-white">Redux</h1>
                <p className="text-gray-400 mt-2">
                  Projeto de estudo com Redux
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleOpenCart}
                className="bg-gray-700 hover:bg-gray-600 rounded-full px-6 py-3 border border-gray-600 transition-colors duration-200"
                aria-label="Abrir carrinho"
              >
                <span className="text-white font-semibold">
                  🛒 Carrinho ({productsCount})
                </span>
              </button>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 border border-red-500"
                  aria-label="Logout"
                >
                  Sair
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 border border-blue-500"
                  aria-label="Login"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
};
