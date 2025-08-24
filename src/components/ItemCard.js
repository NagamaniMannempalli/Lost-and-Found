import React from "react";
import { useItems } from "../context/ItemContext";
import "./ItemCard.css";

function ItemCard({ item }) {
  const { deleteItem } = useItems();

  return (
    <div className="item-card">
      <div className="item-image-wrapper">
        <img src={item.image} alt={item.title} className="item-image" />
        <span className={`status-badge ${item.status.toLowerCase()}`}>
          {item.status}
        </span>
      </div>

      <div className="item-details">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-location"><strong>Location:</strong> {item.location}</p>
        <p className="item-date"><strong>Date:</strong> {item.date}</p>
        <p className="item-contact"><strong>Contact:</strong> {item.contact}</p>

        <button className="delete-btn" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
