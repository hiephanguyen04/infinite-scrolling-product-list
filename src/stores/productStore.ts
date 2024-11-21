import { create } from "zustand";
import { productService } from "../services/productService";
import { Product } from "../types/product";

type ProductStore = {
  products: Product[];
  isLoading: boolean;
  hasMore: boolean;
  query: string;
  fetchInitialProducts: () => Promise<void>;
  fetchMoreProducts: () => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  resetQuery: () => void;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  isLoading: false,
  hasMore: true,
  query: "",
  resetQuery: () => {
    set({ query: '', products: [], hasMore: true });
    get().fetchInitialProducts();
  },
  fetchInitialProducts: async () => {
    set({ isLoading: true });
    const products = await productService.fetchProducts(0);
    set({ products, isLoading: false, hasMore: products.length > 0 });
  },
  fetchMoreProducts: async () => {
    if (!get().hasMore || get().isLoading) return;
    set({ isLoading: true });
    const currentProducts = get().products;
    const newProducts = await productService.fetchProducts(
      currentProducts.length
    );
    set({
      products: [...currentProducts, ...newProducts],
      isLoading: false,
      hasMore: newProducts.length > 0,
    });
  },
  searchProducts: async (query: string) => {
    set({ isLoading: true, query });
    const products = await productService.searchProducts(query);
    set({ products, isLoading: false, hasMore: false });
  },
}));
