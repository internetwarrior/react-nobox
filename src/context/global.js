import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../global/settings";

// Создание контекста
const ValueContext = createContext();

// Экспорт контекста
export default ValueContext;

// Провайдер для контекста
export const ValueProvider = ({ children }) => {
  const [value, setValue] = useState(false); // Состояние для value
  const [items, setItems] = useState([]);
  const [itemsLoadet, setItemsLoadet] = useState(6);
  const [cartItems, setCartItems] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  //Корзина для постов
  useEffect(() => {
    if (firstLoad) {
      setCartItems(JSON.parse(localStorage.getItem("cartList")));
      setFirstLoad(false);
      return;
    }
    localStorage.setItem("cartList", JSON.stringify(cartItems));
  }, [cartItems]);
  const setItemLocalStorage = (id) => {
    if (cartItems && cartItems.find((v) => v == id)) {
      setCartItems((p) => p.filter((item) => item !== id));
      return;
    }
    let newItemList = null;
    if (cartItems == null) {
      newItemList = [id];
    } else {
      newItemList = [...cartItems, id];
    }

    setCartItems(newItemList);
    console.log(id);
  };
  // Эффект для каких-либо действий при изменении value (если нужно)
  useEffect(() => {
    // Здесь можно добавить логику, если value изменяется
    console.log("Value изменился:", value);
  }, [value]);

  // Данные для контекста
  const contextData = {
    value,
    setValue,
    items,
    itemsLoadet,
    setItemsLoadet,
    setItemLocalStorage,
    cartItems,
  };
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setItems(data.users));
  }, []);

  return (
    <ValueContext.Provider value={contextData}>
      {children}
    </ValueContext.Provider>
  );
};
