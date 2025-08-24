// SearchBar.js
import React, { useState } from "react";
import { useItems } from "../context/ItemContext";
import "./SearchBar.css"; // optional CSS file for styling

function SearchBar({ onResults }) {
  const { items } = useItems();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter items by title, location, or status
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.location.toLowerCase().includes(value.toLowerCase()) ||
      item.status.toLowerCase().includes(value.toLowerCase())
    );

    // Pass filtered results to parent component
    if (onResults) {
      onResults(filtered);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search items by title, location, or status..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
