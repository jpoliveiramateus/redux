import { ShopHeader } from "./components/ShopHeader";
import { ProductList } from "./components/ProductList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <ShopHeader />
      <main className="container mx-auto px-4 py-12">
        <ProductList />
      </main>
    </div>
  );
};

export default App;
