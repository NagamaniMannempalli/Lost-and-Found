import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import { useItems } from "../context/ItemContext";
import SearchBar from "../components/SearchBar";
import "./Home.css";

function Home() {
  const { items } = useItems();
  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(items);

  // Update filteredItems when items change in context
  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Reset page to 1 when filteredItems change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredItems]);

  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Welcome to LostLink</h1>
        <p>
          Your one-stop platform to report and track lost & found items. Browse
          through the latest reports and help reunite items with their owners!
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onResults={setFilteredItems} />

      {/* Items Grid */}
      <div className="item-grid">
        {currentItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
