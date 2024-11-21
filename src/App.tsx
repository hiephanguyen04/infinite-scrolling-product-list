import React, { useEffect } from "react";
import { useProductStore } from "./stores/productStore";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  const { fetchInitialProducts } = useProductStore();

  useEffect(() => {
    fetchInitialProducts();
  }, [fetchInitialProducts]);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Product List</h1>
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default App;
