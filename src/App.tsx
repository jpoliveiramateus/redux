import { ShopHeader } from "./components/ShopHeader";
import { ProductList } from "./components/ProductList";
import { products } from "./data/products";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <ShopHeader />
      <main className="container mx-auto px-4 py-12">
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default App;
