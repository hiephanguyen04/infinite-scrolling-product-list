import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useProductStore } from "../stores/productStore";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { searchProducts, resetQuery } = useProductStore();
  const debouncedQuery = useDebounce(input, 300);
  useEffect(() => {
    if (debouncedQuery) {
      searchProducts(debouncedQuery);
    }
  }, [debouncedQuery, searchProducts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setInput("");
      resetQuery();
    }
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      style={{ width: "50%", height: "30px", margin: "10px" }}
      value={input}
      onChange={handleSearch}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBar;
