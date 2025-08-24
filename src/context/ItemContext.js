import React, { createContext, useState, useContext } from "react";
import { items as dummyItems } from "../utils/dummyData";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const localItems = getFromLocalStorage("items");
  const [items, setItems] = useState(localItems || dummyItems);

  const addItem = (newItem) => {
    const updated = [...items, newItem];
    setItems(updated);
    saveToLocalStorage("items", updated);
  };

  const deleteItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    saveToLocalStorage("items", updated);
  };

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => useContext(ItemContext);
