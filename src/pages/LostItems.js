import React, { useState } from "react";
import { useItems } from "../context/ItemContext";
import ItemCard from "../components/ItemCard";
import "./ItemPage.css";

function LostItems() {
  const { items } = useItems();
  const lostItems = items.filter((item) => item.status === "Lost");

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(lostItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lostItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="items-container">
      <h1>Lost Items</h1>

      <div className="item-grid">
        {currentItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

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

export default LostItems;
