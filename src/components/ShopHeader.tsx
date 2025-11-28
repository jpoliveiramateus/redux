export const ShopHeader = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">Redux</h1>
            <p className="text-gray-400 mt-2">Projeto de estudo de Redux</p>
          </div>
          <div className="bg-gray-700 rounded-full px-6 py-3 border border-gray-600">
            <span className="text-white font-semibold">🛒 Carrinho (0)</span>
          </div>
        </div>
      </div>
    </header>
  );
};
