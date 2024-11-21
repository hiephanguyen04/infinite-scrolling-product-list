import axios from "axios";

const API_URL = "https://dummyjson.com";

export const productService = {
  fetchProducts: async (skip: number, limit: number = 20) => {
    const response = await axios.get(
      `${API_URL}/products?limit=${limit}&skip=${skip}`
    );
    return response.data.products;
  },
  searchProducts: async (query: string, limit: number = 20) => {
    const response = await axios.get(
      `${API_URL}/products/search?q=${query}&limit=${limit}`
    );
    return response.data.products;
  },
};
