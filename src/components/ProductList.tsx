import React from "react";
import { useProductStore } from "../stores/productStore";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

const ProductList: React.FC = () => {
  const { products, fetchMoreProducts, isLoading } = useProductStore();
  useInfiniteScroll(fetchMoreProducts);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {isLoading && <Loading />}
    </div>
  );
};

export default ProductList;
