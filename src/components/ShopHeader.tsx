import { useDispatch } from "react-redux";

import { login, logout } from "../redux/features/user";

import { useAppSelector } from "../redux/hooks";

export const ShopHeader = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(login({ email: "teste@teste.com", name: "Teste" }));
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
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
              <p className="text-gray-400 mt-2">Projeto de estudo de Redux</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 rounded-full px-6 py-3 border border-gray-600">
              <span className="text-white font-semibold">🛒 Carrinho (0)</span>
            </div>
            {user ? (
              <button
                onClick={handleLogoutClick}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 border border-red-500"
                aria-label="Logout"
              >
                Sair
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
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
  );
};
