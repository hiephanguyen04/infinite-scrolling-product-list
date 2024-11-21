import { Product } from "../types/product";

const ProductCard = ({ product }: { product: Product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price.toFixed(2)}</p>
  </div>
);

export default ProductCard;
