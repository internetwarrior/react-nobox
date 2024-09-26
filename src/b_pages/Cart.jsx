import React, { useContext } from "react";
import ValueContext from "../context/global";
import CardPost from "../a_components/CardPost";

const Cart = () => {
  const {
    value,
    items,
    setValue,
    itemsLoadet,
    setItemsLoadet,
    setItemLocalStorage,
    setCardItems,
  } = useContext(ValueContext);

  let cart = JSON.parse(localStorage.getItem("cartList"));

  let cartData;
  if (cart != null) {
    cartData = cart.map((i) => {
      return items.find((item) => item["id"] === i);
    });
  }

  return (
    <div>
      <div>
        {cart != null
          ? cartData.map((el) => <CardPost id={el.id} el={el} key={el.id} />)
          : "error"}
      </div>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Очистить корзину
      </button>
    </div>
  );
};

export default Cart;
